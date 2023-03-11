import { Request, Response, NextFunction } from "express";
import validateResource from "../../../src/middleware/validation.middleware.js";
import {
  createUserSchema,
  forgotPasswordSchema,
  logInUserSchema,
  resetEmailSchema,
  updatePasswordSchema,
  updateUserSchema,
} from "../../../src/schemas/user.schema.js";

describe("Validation middleware", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });
