import { z } from "zod";

/**
 * Create user schema
 */
export const createUserSchema = z
  .object({
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
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .trim()
      .min(8, { message: "Password must be at least 8 chars long" }),
    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
        invalid_type_error: "Confirm password must be a string",
      })
      .trim()
      .min(8, { message: "Confirm password must be at least 8 chars long" }),
    img: z
      .string({
        required_error: "Image is required",
        invalid_type_error: "Image path must be a string",
      })
      .trim(),
  })
  .strict();

/**
 * Update password schema
 */
export const updatePasswordSchema = z.object({
  currentPassword: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .trim()
    .min(8, { message: "Password must be at least 8 chars long" }),
  newPassword: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .trim()
    .min(8, { message: "Password must be at least 8 chars long" }),
  confirmPassword: z
    .string({
      required_error: "Confirm password is required",
      invalid_type_error: "Confirm password must be a string",
    })
    .trim()
    .min(8, { message: "Confirm password must be at least 8 chars long" }),
});
/**
 * Update user schema
 */
export const updateUserSchema = createUserSchema.pick({ firstName: true, lastName: true });
/**
 * Log in user Schema
 */
export const logInUserSchema = createUserSchema.pick({ email: true, password: true });
