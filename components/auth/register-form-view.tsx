import { type RegisterRequestPayload } from "@/schema/register-schema";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import PasswordInput from "../reusables/password-input";
import { Input } from "../ui/input";
import { useUtilsControllerCheckUsernameUniqueness } from "@/core/api-client/neurachatComponents";
import { useEffect } from "react";
import { getApiErrorMessage } from "@/lib/get-error-message";
import { Spinner } from "../ui/spinner";
import { useDebounce } from "@/hooks/use-debounce";

export const RegisterFormView = () => {
  const registerForm = useFormContext<RegisterRequestPayload>();

  const debouncedUsername = useDebounce(registerForm.watch("username"), 500);

  const usernameUnique = useUtilsControllerCheckUsernameUniqueness(
    {
      pathParams: {
        username: debouncedUsername,
      },
    },
    {
      enabled: Boolean(debouncedUsername),
      retry: 1,
    },
  );

  useEffect(() => {
    if (usernameUnique.error) {
      registerForm.setError("username", {
        type: "custom",
        message: getApiErrorMessage(usernameUnique.error),
      });
    } else {
      registerForm.clearErrors("username");
    }
  }, [registerForm, debouncedUsername, usernameUnique.error]);
  return (
    <>
      <FormField
        control={registerForm.control}
        name="email"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="leading-6">Email</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Enter your email" />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <FormField
        control={registerForm.control}
        name="username"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <div className="flex justify-between w-full items-center">
              <FormLabel className="leading-6">Username</FormLabel>

              {usernameUnique.isLoading ? (
                <Spinner className="text-primary text-xs" />
              ) : null}
            </div>
            <FormControl>
              <Input {...field} placeholder="Enter your username" />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
      <FormField
        control={registerForm.control}
        name="password"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="leading-6">Password</FormLabel>
            <FormControl>
              <PasswordInput placeholder="Enter your password" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <FormField
        control={registerForm.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="leading-6">Confirm Password</FormLabel>
            <FormControl>
              <PasswordInput placeholder="Confirm your password" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    </>
  );
};
