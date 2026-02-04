import z from "zod"
import { emailSchema, usernameSchema } from "./reusable-schema"

export const loginSchema = z.object({
  usernameOrEmail: z.union([usernameSchema, emailSchema]),
  password: z
    .string({
      error: "Password is required"
    })
    .trim()
})

export type LoginRequestPayload = z.infer<typeof loginSchema>
