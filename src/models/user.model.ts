import { z } from "zod";

const userSchema = z.object({
  firstName: z
    .string({
      required_error: "First name is required",
      invalid_type_error: "First name must be a string",
    })
    .trim()
    .min(4, { message: "First name must not be less than 4 chars long" })
    .max(50, { message: "First name must not exceed 50 chars long" }),
  lastName: z
    .string({
      required_error: "Last name is required",
      invalid_type_error: "Last name must be a string",
    })
    .trim()
    .min(4, { message: "Last name must not be less than 4 chars long" })
    .max(50, { message: "Last name must not exceed 50 chars long" }),
  email: z
    .string({ required_error: "Email is required", invalid_type_error: "Email must be a string" })
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
