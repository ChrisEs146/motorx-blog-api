import { z } from "zod";

const userSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string",
    })
    .trim()
    .min(4, { message: "Username must not be less than 4 chars long" })
    .max(45, { message: "Username must not exceed 45 chars long" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 chars long" }),
  img: z.string({ required_error: "Image is required" }).trim(),
  recoveryToken: z.string().optional(),
});

export type UserInput = z.infer<typeof userSchema>;
