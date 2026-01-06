import { EnvVars } from "@/lib/constants";
import type { NeurachatContext } from "./neurachatContext";
import axios from "axios";
const baseUrl = EnvVars.apiBaseUrl;

export type ErrorWrapper<TError> =
  | TError
  | { name: "unknown"; message: string; stack?: unknown };

export type NeurachatFetcherOptions<
  TBody,
  THeaders,
  TQueryParams,
  TPathParams,
> = {
  url: string;
  method: string;
  body?: TBody;
  headers?: THeaders;
  queryParams?: TQueryParams;
  pathParams?: TPathParams;
  signal?: AbortSignal;
} & NeurachatContext["fetcherOptions"];

export async function neurachatFetch<
  TData,
  TError,
  TBody extends Record<string, unknown> | FormData | undefined | null,
  THeaders extends Record<string, unknown>,
  TQueryParams extends Record<string, string> | undefined,
  TPathParams extends Record<string, string> | undefined,
>({
  url,
  method,
  body,
  headers,
  pathParams,
  queryParams,
  signal,
}: NeurachatFetcherOptions<
  TBody,
  THeaders,
  TQueryParams,
  TPathParams
>): Promise<TData> {
  let error: ErrorWrapper<TError>;
  try {
    const requestHeaders: HeadersInit = {
      "Content-Type": "application/json",
      ...headers,
    };

    const authorizationHeadIsPresent = "Authorization" in requestHeaders;
    // if (authStore.getState().payload.user && !authorizationHeadIsPresent) {
    // 			requestHeaders["Authorization"] = getBearerToken() || ""
    // 		}
    if (
      requestHeaders["Content-Type"]
        ?.toLowerCase()
        .includes("multipart/form-data")
    ) {
      delete requestHeaders["Content-Type"];
    }

    const resolvedUrl = `${baseUrl}${resolveUrl(url, queryParams, pathParams)}`;

    const response = await axios.request<TData>({
      url: resolvedUrl,
      method: method.toUpperCase(),
      data: body
        ? body instanceof FormData
          ? body
          : JSON.stringify(body)
        : undefined,
      headers: requestHeaders,
      signal,
    });

    return response.data as TData;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      const resp = e.response;

      if (resp?.data !== undefined) {
        error = resp.data as TError;
      } else {
        error = {
          name: "unknown" as const,
          message: `Network error (${e.message ?? "Unknown"})`,
          stack: e.stack,
        };
      }
      throw error as ErrorWrapper<TError>;
    }

    const errorObject: Error = {
      name: "unknown" as const,
      message:
        e instanceof Error ? `Network error (${e.message})` : "Network error",
      stack: e as string,
    };
    throw errorObject as ErrorWrapper<TError>;
  }
}

const resolveUrl = (
  url: string,
  queryParams: Record<string, string> = {},
  pathParams: Record<string, string> = {},
) => {
  let query = new URLSearchParams(queryParams).toString();
  if (query) query = `?${query}`;
  return (
    url.replace(/\{\w*\}/g, (key) => pathParams[key.slice(1, -1)] ?? "") + query
  );
};
