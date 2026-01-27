import { useSearchParams } from "next/navigation"
import { useCallback } from "react"

export const useSearchParamsUtils = () => {
  const searchParams = useSearchParams()
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  const getSearchParam = useCallback(
    (name: string) => {
      return searchParams.get(name)
    },
    [searchParams]
  )

  const removeSearchParam = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.delete(name)
      return params.toString()
    },
    [searchParams]
  )

  const getAllSearchParams = useCallback(() => {
    return searchParams.toString()
  }, [searchParams])
  return {
    createQueryString,
    getSearchParam,
    removeSearchParam,
    getAllSearchParams
  }
}
