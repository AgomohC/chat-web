import z from "zod";
import { passwordSchema } from "./reusable-schema";

export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmNewPassword: z.string({
      error: "Confirm password is required",
    }),
  })
  .superRefine(({ password, confirmNewPassword }, ctx) => {
    if (password !== confirmNewPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password and confirm password do not match",
        path: ["confirmNewPassword"],
      });
    }
  });
