import { comparePassword, hashPassword } from "src/utils/passwordManager.js";
import { errorMsgs } from "src/defaults/defaultMessages.js";
import { CustomError } from "src/utils/customError.js";
import { CreatedUser, LoggedInUser } from "./auth.types.js";
import { LogInUserInput, CreateUserInput } from "src/schemas/user.types.js";
import prisma from "src/db/client.js";

export function registerUser(data: Request): User {
  try {
    const userData = validateUserInput(data.body);
    return userData;
  } catch (error) {
    console.error(error);
  }
}
