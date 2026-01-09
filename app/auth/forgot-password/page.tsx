import { AuthHeader } from "@/components/auth/auth-header";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { Metadata } from "next";

export default function ForgotPasswordPage() {
  return (
    <>
      <AuthHeader
        title="Forgot Password"
        subtitle="Enter your email to reset your password"
      />
      <ForgotPasswordForm />
    </>
  );
}

export const metadata: Metadata = {
  description: "Forgot password",
  title: "Forgot Password",
};
