import { AuthHeader } from "@/components/auth/auth-header";
import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";

export default function LoginPage() {
  return (
    <>
      <AuthHeader title="Login" subtitle="Welcome back to Neurachat" />

      <LoginForm />
    </>
  );
}

export const metadata: Metadata = {
  description: "Login to Neurachat",
  title: "Login",
};
