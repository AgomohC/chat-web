import { LoginRequestPayload } from "@/schema/login-schema"
import { useFormContext } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form"
import PasswordInput from "../reusables/password-input"
import { Input } from "../ui/input"
import Link from "next/link"
import { routes } from "@/lib/routes"

export const LoginFormView = () => {
  const loginForm = useFormContext<LoginRequestPayload>()
  return (
    <>
      <FormField
        control={loginForm.control}
        name="usernameOrEmail"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="leading-6">Username or Email</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Enter your username or email" />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
      <FormField
        control={loginForm.control}
        name="password"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <div className="inline-flex justify-between items-center">
              <FormLabel className="leading-6">Password</FormLabel>
              <Link
                href={routes.auth.forgotPassword}
                className="text-emerald-700 text-xs"
              >
                Forgot Password
              </Link>
            </div>
            <FormControl>
              <PasswordInput placeholder="••••••••" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    </>
  )
}
