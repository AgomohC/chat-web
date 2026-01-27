import { COOKIE_STORAGE_KEYS, EnvVars } from "@/lib/constants"
import type { NeurachatContext } from "./neurachatContext"
import axios from "axios"
import { getBearerToken } from "@/lib/utils"
import { deleteCookie, setCookie } from "cookies-next"
import { LoginResponse } from "./neurachatSchemas"
import { routes } from "@/lib/routes"
import { logger } from "@/lib/logger"
const baseUrl = EnvVars.apiBaseUrl

export type ErrorWrapper<TError> =
  | TError
  | { name: "unknown"; message: string; stack?: unknown }

export type NeurachatFetcherOptions<
  TBody,
  THeaders,
  TQueryParams,
  TPathParams
> = {
  url: string
  method: string
  body?: TBody
  headers?: THeaders
  queryParams?: TQueryParams
  pathParams?: TPathParams
  signal?: AbortSignal
} & NeurachatContext["fetcherOptions"]

const axiosClient = axios.create({
  timeout: 1000 * 30
})

axiosClient.interceptors.request.use(
  (config) => {
    const token = getBearerToken()

    if (token) {
      config.headers["Authorization"] = token
    }

    if (!token && "Authorization" in config.headers) {
      delete config.headers["Authorization"]
    }
    return config
  },
  (error) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshUrl = `${baseUrl}${resolveUrl("/auth/refresh-token", {}, {})}`
        const res = await axios.post<LoginResponse>(
          refreshUrl,
          {},
          { withCredentials: true }
        )
        const newToken = res.data.data.tokens.accessToken

        setCookie(COOKIE_STORAGE_KEYS.ACCESS_TOKEN, newToken)
        axiosClient.defaults.headers.common["Authorization"] =
          "Bearer " + newToken

        return axiosClient(originalRequest)
      } catch (err) {
        logger.error("Token refresh failed", err)
        deleteCookie(COOKIE_STORAGE_KEYS.ACCESS_TOKEN)
        delete axiosClient.defaults.headers.common["Authorization"]
        window.location.href = routes.auth.login
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)

export async function neurachatFetch<
  TData,
  TError,
  TBody extends Record<string, unknown> | FormData | undefined | null,
  THeaders extends Record<string, unknown>,
  TQueryParams extends Record<string, string> | undefined,
  TPathParams extends Record<string, string> | undefined
>({
  url,
  method,
  body,
  headers,
  pathParams,
  queryParams,
  signal
}: NeurachatFetcherOptions<
  TBody,
  THeaders,
  TQueryParams,
  TPathParams
>): Promise<TData> {
  let error: ErrorWrapper<TError>
  try {
    const requestHeaders: HeadersInit = {
      "Content-Type": "application/json",
      ...headers
    }

    if (
      requestHeaders["Content-Type"]
        ?.toLowerCase()
        .includes("multipart/form-data")
    ) {
      delete requestHeaders["Content-Type"]
    }

    const resolvedUrl = `${baseUrl}${resolveUrl(url, queryParams, pathParams)}`

    const response = await axiosClient.request<TData>({
      url: resolvedUrl,
      method: method.toUpperCase(),
      data: body
        ? body instanceof FormData
          ? body
          : JSON.stringify(body)
        : undefined,
      headers: requestHeaders,
      signal
    })

    return response.data as TData
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      const resp = e.response

      if (resp?.data !== undefined) {
        error = resp.data as TError
      } else {
        error = {
          name: "unknown" as const,
          message: `Network error (${e.message ?? "Unknown"})`,
          stack: e.stack
        }
      }
      throw error as ErrorWrapper<TError>
    }

    const errorObject: Error = {
      name: "unknown" as const,
      message:
        e instanceof Error ? `Network error (${e.message})` : "Network error",
      stack: e as string
    }
    throw errorObject as ErrorWrapper<TError>
  }
}

const resolveUrl = (
  url: string,
  queryParams: Record<string, string> = {},
  pathParams: Record<string, string> = {}
) => {
  let query = new URLSearchParams(queryParams).toString()
  if (query) query = `?${query}`
  return (
    url.replace(/\{\w*\}/g, (key) => pathParams[key.slice(1, -1)] ?? "") + query
  )
}
