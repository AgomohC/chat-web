import z from "zod";
import { emailSchema, passwordSchema, usernameSchema } from "./reusable-schema";

export const loginSchema = z.object({
  usernameOrEmail: z.xor([usernameSchema, emailSchema]),
  password: passwordSchema,
});

export type LoginRequestPayload = z.infer<typeof loginSchema>;
