// import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import { validateUserInput } from "../validation/validation.service.js";
// const prisma = new PrismaClient();

export function registerUser(data: Request): User {
  try {
    const userData = validateUserInput(data.body);
    return userData;
  } catch (error) {
    console.error(error);
  }
}
