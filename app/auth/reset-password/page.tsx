import { Metadata } from "next"
import AuthLayout from "../layout"
import { AuthHeader } from "@/components/auth/auth-header"
import { ResetPasswordForm } from "@/components/auth/reset-password-form"

type Props = {
  searchParams: Promise<{ token: string | undefined }>
}

export default async function ResetPasswordPage({ searchParams }: Props) {
  const { token } = await searchParams
  if (!token) {
    return (
      <>
        <AuthHeader
          title="Invalid Token"
          subtitle="Please request a new password reset."
        />
      </>
    )
  }
  return (
    <>
      <AuthHeader
        title="Reset Password"
        subtitle="Complete your password reset process"
      />
      <ResetPasswordForm token={token} />
    </>
  )
}
export const metadata: Metadata = {
  description: "Complete your password reset process",
  title: "Reset Password"
}
