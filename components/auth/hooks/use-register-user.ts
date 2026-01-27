import { useAuthControllerRegister } from "@/core/api-client/neurachatComponents"
import { getApiErrorMessage } from "@/lib/get-error-message"
import { RegisterRequestPayload } from "@/schema/register-schema"
import { toast } from "sonner"

export const useRegisterUser = () => {
  const { mutateAsync, status } = useAuthControllerRegister()
  const registerUser = async (payload: RegisterRequestPayload) => {
    try {
      const response = await mutateAsync({
        body: payload
      })

      toast.success(response.message)
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)
      toast.error(errorMessage)
    }
  }

  return {
    registerUser,
    status
  }
}
