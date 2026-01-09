import { ResetPasswordRequestPayload } from "@/schema/reset-password-schema";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import PasswordInput from "../reusables/password-input";
export const ResetPasswordFormView = () => {
  const resetPasswordForm = useFormContext<ResetPasswordRequestPayload>();
  return (
    <>
      <FormField
        control={resetPasswordForm.control}
        name="password"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="leading-6">New Password</FormLabel>
            <FormControl>
              <PasswordInput placeholder="Enter your new password" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
      <FormField
        control={resetPasswordForm.control}
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
