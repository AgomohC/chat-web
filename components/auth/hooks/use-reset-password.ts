import { useAuthControllerResetPassword } from "@/core/api-client/neurachatComponents"
import { ResetPasswordRequest } from "@/core/api-client/neurachatSchemas"
import { getApiErrorMessage } from "@/lib/get-error-message"
import { routes } from "@/lib/routes"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const useResetPassword = () => {
  const { status, mutateAsync } = useAuthControllerResetPassword()
  const router = useRouter()

  const resetPassword = async (data: ResetPasswordRequest) => {
    try {
      const response = await mutateAsync({
        body: data
      })
      toast.success(response.message)
      router.push(routes.auth.login)
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)
      toast.error(errorMessage)
    }
  }
  return {
    resetPassword,
    status
  }
}
