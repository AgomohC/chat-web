"use client"
import { type LoginRequestPayload, loginSchema } from "@/schema/login-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { useLogin } from "./hooks/use-login"
import Link from "next/link"
import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"
import { routes } from "@/lib/routes"
import { LoginFormView } from "./login-form-view"
import { Form } from "../ui/form"

export const LoginForm = () => {
  const loginForm = useForm<LoginRequestPayload>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: ""
    }
  })

  const { login, status } = useLogin()

  const onSubmit: SubmitHandler<LoginRequestPayload> = async (data) => {
    await login(data)
  }
  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit(onSubmit)}
        className="w-full space-y-4"
      >
        <LoginFormView />
        <Button
          type="submit"
          className="w-full h-12 text-white text-base font-semibold"
          disabled={status === "pending"}
        >
          {status === "pending" && <Spinner />}
          Login
        </Button>

        <div className="w-full text-center text-xs">
          Not registered?{" "}
          <Link href={routes.auth.register} className="text-emerald-700">
            Register
          </Link>
        </div>
      </form>
    </Form>
  )
}
