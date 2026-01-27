import { AuthHeader } from "@/components/auth/auth-header"
import { RegisterForm } from "@/components/auth/register-form"
import { Metadata } from "next"

export default function RegistrationPage() {
  return (
    <>
      <AuthHeader title="Register" subtitle="Create an account to continue" />
      <RegisterForm />
    </>
  )
}

export const metadata: Metadata = {
  description: "Welcome to Neurachat",
  title: "Register"
}
