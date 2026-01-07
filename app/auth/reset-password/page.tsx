import { Metadata } from "next";

type Props = {
  searchParams: Promise<{ token: string | undefined }>;
};

export default async function ResetPasswordPage({ searchParams }: Props) {
  const { token } = await searchParams;
  return <div></div>;
}
export const metadata: Metadata = {
  description: "Complete your password reset process",
  title: "Reset Password",
};
