import { useAuthControllerForgotPassword } from "@/core/api-client/neurachatComponents"
import { ForgotPasswordRequest } from "@/core/api-client/neurachatSchemas"
import { getApiErrorMessage } from "@/lib/get-error-message"
import { toast } from "sonner"

export const useForgotPassword = () => {
  const { mutateAsync, status } = useAuthControllerForgotPassword()

  const forgotPassword = async (data: ForgotPasswordRequest) => {
    try {
      const response = await mutateAsync({
        body: data
      })
      toast.success(response.message)
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)
      toast.error(errorMessage)
    }
  }
  return { status, forgotPassword }
}
