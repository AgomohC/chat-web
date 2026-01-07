"use client";
import { useSuspenseAuthControllerConfirmEmail } from "@/core/api-client/neurachatComponents";
import { AuthHeader } from "./auth-header";
import { RegistrationVerificationSuccess } from "./registration-verification";

export const VerifyRegistrationBody = ({ token }: { token: string }) => {
  useSuspenseAuthControllerConfirmEmail({
    pathParams: {
      token,
    },
  });
  return (
    <>
      <AuthHeader
        title="Email Verified!"
        subtitle="Your account has been successfully verified"
      />
      <RegistrationVerificationSuccess />
    </>
  );
};
