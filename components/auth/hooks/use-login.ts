import { useAuthControllerLogin } from "@/core/api-client/neurachatComponents";
import { LoginRequest } from "@/core/api-client/neurachatSchemas";
import { COOKIE_STORAGE_KEYS } from "@/lib/constants";
import { getApiErrorMessage } from "@/lib/get-error-message";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLogin = () => {
  const { mutateAsync, status } = useAuthControllerLogin();
  const router = useRouter();
  const login = async (payload: LoginRequest) => {
    try {
      const response = await mutateAsync({
        body: payload,
      });
      setCookie(
        COOKIE_STORAGE_KEYS.ACCESS_TOKEN,
        response.data.tokens.accessToken,
      );
      toast.success(response.message);
      setTimeout(() => {
        router.refresh();
      }, 5);
    } catch (error) {
      console.log(error);

      const errorMessage = getApiErrorMessage(error);
      toast.error(errorMessage);
    }
  };

  return {
    login,
    status,
  };
};
