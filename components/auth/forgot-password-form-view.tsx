import { forgotPasswordRequestPayload } from "@/schema/forgot-password-schema";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export const ForgotPasswordFormView = () => {
  const forgotPasswordForm = useFormContext<forgotPasswordRequestPayload>();
  return (
    <>
      <FormField
        control={forgotPasswordForm.control}
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
    </>
  );
};
