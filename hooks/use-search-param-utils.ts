import { usePathname, useSearchParams } from "next/navigation"
import { useCallback } from "react"

export const useSearchParamsUtils = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  const generateLinkFromSearchParam = (searchParam: URLSearchParams) => {
    const [key, value] = searchParam.toString().split("=")
    return pathname + "?" + createQueryString(key, value)
  }

  return {
    createQueryString,
    generateLinkFromSearchParam
  }
}
