import z from "zod"
import { emailSchema, passwordSchema, usernameSchema } from "./reusable-schema"

export const registerSchema = z
  .object({
    email: emailSchema,
    username: usernameSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Confirm password is required")
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Password and confirm password do not match"
      })
    }
  })

export type RegisterRequestPayload = z.infer<typeof registerSchema>
