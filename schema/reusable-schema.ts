import z from "zod/v4"

export const passwordSchema = z
  .string({
    error: "Password is required"
  })
  .trim()
  .min(8, { message: "Password must have at least 8 characters" })
  .regex(/[$&+,:;=?@#|'<>.^*()%!-_]/, {
    message: "Password must contain one special character"
  })
  .regex(/[A-Z]/, {
    message: "Password must contain one uppercase character"
  })
  .regex(/[0-9]/, {
    message: "Password must contain one number"
  })
  .regex(/[a-z]/, {
    message: "Password must contain one lowercase character"
  })

export const emailSchema = z
  .email({
    message: "Invalid email address"
  })
  .trim()

export const usernameSchema = z
  .string({
    error: "Username is required"
  })
  .trim()
  .min(6, { message: "Username must have at least 6 characters" })
  .max(256, { message: "Username must have at most 256 characters" })
