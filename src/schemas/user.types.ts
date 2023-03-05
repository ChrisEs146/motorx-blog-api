import { z } from "zod";
import {
  createUserSchema,
  updatePasswordSchema,
  updateUserSchema,
  logInUserSchema,
} from "./user.schema.js";

// User input types
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type UpdatePasswordInput = z.infer<typeof updatePasswordSchema>;
export type LogInUserInput = z.infer<typeof logInUserSchema>;
