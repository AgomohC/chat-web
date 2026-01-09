"use client";
import {
  ResetPasswordRequestPayload,
  resetPasswordSchema,
} from "@/schema/reset-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useResetPassword } from "./hooks/use-reset-password";
import { ResetPasswordFormView } from "./reset-password-form-view";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Form } from "../ui/form";

export const ResetPasswordForm = (props: { token: string }) => {
  const resetPasswordForm = useForm<ResetPasswordRequestPayload>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { resetPassword, status } = useResetPassword();
  const onSubmit: SubmitHandler<ResetPasswordRequestPayload> = (data) => {
    resetPassword({ ...data, token: props.token }).then(() => {
      resetPasswordForm.reset({
        password: "",
        confirmPassword: "",
      });
    });
  };
  return (
    <Form {...resetPasswordForm}>
      <form
        onSubmit={resetPasswordForm.handleSubmit(onSubmit)}
        className="w-full space-y-4"
      >
        <ResetPasswordFormView />
        <Button
          type="submit"
          className="w-full h-12 text-white text-base font-semibold"
          disabled={status === "pending"}
        >
          {status === "pending" && <Spinner />}
          Reset Password
        </Button>
      </form>
    </Form>
  );
};
