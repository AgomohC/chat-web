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

export const RegisterFormView = () => {
  const registerForm = useFormContext<RegisterRequestPayload>();
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
            <FormLabel className="leading-6">Username</FormLabel>
            <FormControl>
              <Input {...field} placeholder="What should we call you?" />
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
