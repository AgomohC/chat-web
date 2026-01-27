"use client"
import { AuthHeader } from "@/components/auth/auth-header"
import { RegistrationVerificationError } from "@/components/auth/registration-verification"
import { logger } from "@/lib/logger"
import { useEffect } from "react"

export default function Error({
  error
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    logger.error(error)
  }, [error])

  return (
    <>
      <AuthHeader
        title="Verification Failed"
        subtitle={error.message || "We couldn't verify your email address"}
      />
      <RegistrationVerificationError />
    </>
  )
}
