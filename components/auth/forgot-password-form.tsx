"use client"
import { Form } from "../ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"
import { forgotPasswordRequestPayload } from "@/schema/forgot-password-schema"
import { forgotPasswordSchema } from "@/schema/forgot-password-schema"
import { useForgotPassword } from "./hooks/use-forgot-password"
import { routes } from "@/lib/routes"
import { ForgotPasswordFormView } from "./forgot-password-form-view"
import Link from "next/link"

export const ForgotPasswordForm = () => {
  const forgotPasswordForm = useForm<forgotPasswordRequestPayload>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ""
    }
  })

  const { status, forgotPassword } = useForgotPassword()

  const onSubmit: SubmitHandler<forgotPasswordRequestPayload> = (data) => {
    forgotPassword(data).then(() => {
      forgotPasswordForm.reset()
    })
  }
  return (
    <Form {...forgotPasswordForm}>
      <form
        onSubmit={forgotPasswordForm.handleSubmit(onSubmit)}
        className="w-full space-y-4"
      >
        <ForgotPasswordFormView />
        <Button
          type="submit"
          className="w-full h-12 text-white text-base font-semibold"
          disabled={status === "pending"}
        >
          {status === "pending" && <Spinner />}
          Send Reset Link
        </Button>

        <div className="w-full text-center text-xs">
          Recalled your password?{" "}
          <Link href={routes.auth.login} className="text-emerald-700">
            Login
          </Link>
        </div>
      </form>
    </Form>
  )
}
