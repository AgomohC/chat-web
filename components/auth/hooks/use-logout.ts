import { useAuthControllerLogout } from "@/core/api-client/neurachatComponents"
import { COOKIE_STORAGE_KEYS } from "@/lib/constants"
import { useQueryClient } from "@tanstack/react-query"
import { deleteCookie } from "cookies-next"
import { useRouter } from "next/navigation"

export const useLogout = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { mutateAsync, status } = useAuthControllerLogout()

  const logout = async () => {
    mutateAsync({}).then(() => {
      deleteCookie(COOKIE_STORAGE_KEYS.ACCESS_TOKEN)
      router.refresh()
    })
    setTimeout(() => {
      queryClient.clear()
    }, 50)
  }

  return {
    logout,
    loading: status === "pending"
  }
}
