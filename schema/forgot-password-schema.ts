import z from "zod";
import { emailSchema } from "./reusable-schema";

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export type forgotPasswordRequestPayload = z.infer<typeof forgotPasswordSchema>;
