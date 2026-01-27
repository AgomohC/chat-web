import { AuthHeader } from "@/components/auth/auth-header"
import {
  RegistrationVerificationError,
  RegistrationVerificationLoader
} from "@/components/auth/registration-verification"
import { VerifyRegistrationBody } from "@/components/auth/registration-verification-body"
import { Metadata } from "next"
import { Suspense } from "react"

type Props = {
  searchParams: Promise<{ token: string | undefined }>
}

export default async function VerifyRegistrationPage({ searchParams }: Props) {
  const { token } = await searchParams

  if (!token) {
    return (
      <>
        <AuthHeader
          title="Verification Failed"
          subtitle="We couldn't verify your email address"
        />
        <RegistrationVerificationError />
      </>
    )
  }
  return (
    <Suspense
      fallback={
        <>
          <AuthHeader
            title="Verifying Email"
            subtitle="Please wait while we verify your email address"
          />
          <RegistrationVerificationLoader />
        </>
      }
    >
      <VerifyRegistrationBody token={token} />
    </Suspense>
  )
}
export const metadata: Metadata = {
  description: "Complete your registration process",
  title: "Verify Registration"
}
