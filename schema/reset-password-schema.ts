import z from "zod"
import { passwordSchema } from "./reusable-schema"

export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string({
      error: "Confirm password is required"
    })
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password and confirm password do not match",
        path: ["confirmNewPassword"]
      })
    }
  })
export type ResetPasswordRequestPayload = z.infer<typeof resetPasswordSchema>
