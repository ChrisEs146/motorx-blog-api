import { z } from "zod";
import {
  createUserSchema,
  updatePasswordSchema,
  updateUserSchema,
  logInUserSchema,
  resetEmailSchema,
  forgotPasswordSchema,
} from "./user.schema.js";

// User input types
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type UpdatePasswordInput = z.infer<typeof updatePasswordSchema>;
export type LogInUserInput = z.infer<typeof logInUserSchema>;
export type ResetEmailInput = z.infer<typeof resetEmailSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
