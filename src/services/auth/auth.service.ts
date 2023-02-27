import { comparePassword, hashPassword } from "src/utils/passwordManager.js";
import { errorMsgs } from "src/defaults/defaultMessages.js";
import { CustomError } from "src/utils/customError.js";
import { CreatedUser, LoggedInUser } from "./auth.types.js";
import { LogInUserInput, CreateUserInput } from "src/schemas/user.types.js";
import prisma from "src/db/client.js";

// registerUser
export async function registerUser(data: CreateUserInput): Promise<CreatedUser> {
  if (data.password !== data.confirmPassword) {
    throw new CustomError(400, errorMsgs.NotMatch);
  }

  try {
    const hashedPassword = await hashPassword(10, data.password);
    const createdUser = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        img: data.img,
        password: hashedPassword,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return createdUser;
  } catch (error) {
    throw new CustomError(500, errorMsgs.UserError);
  }
}
  }
}
