"use client"
import {
  type RegisterRequestPayload,
  registerSchema
} from "@/schema/register-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { type SubmitHandler, useForm } from "react-hook-form"
import { RegisterFormView } from "./register-form-view"
import { Button } from "../ui/button"
import { Form } from "../ui/form"
import { useRegisterUser } from "./hooks/use-register-user"
import { Spinner } from "../ui/spinner"
import { routes } from "@/lib/routes"
import Link from "next/link"

export const RegisterForm = () => {
  const registerForm = useForm<RegisterRequestPayload>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: ""
    }
  })

  const { registerUser, status } = useRegisterUser()

  const onSubmit: SubmitHandler<RegisterRequestPayload> = (data) => {
    registerUser(data).then(() => {
      registerForm.reset({
        email: "",
        password: "",
        username: "",
        confirmPassword: ""
      })
    })
  }
  return (
    <Form {...registerForm}>
      <form
        onSubmit={registerForm.handleSubmit(onSubmit)}
        className="w-full space-y-4"
      >
        <RegisterFormView />
        <Button
          type="submit"
          className="w-full h-12 text-white text-base font-semibold"
          disabled={status === "pending"}
        >
          {status === "pending" && <Spinner />}
          Join Neurachat
        </Button>

        <div className="w-full text-center text-xs">
          Already registered?{" "}
          <Link href={routes.auth.login} className="text-emerald-700">
            Login
          </Link>
        </div>
      </form>
    </Form>
  )
}
