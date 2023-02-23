import { UserRequest } from "src/models/user.model.js";
import { userSchema } from "src/models/user.model.js";

export function validateUserInput(data: unknown): UserRequest {
  const result = userSchema.safeParse(data);
  if (!result.success) {
    throw result.error;
  }
  return result.data;
}
