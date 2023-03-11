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

  it("Calls next func on valid user creation input", () => {
    const validBody = {
      firstName: "Arthur",
      lastName: "Morgan",
      email: "arthur@email.com",
      password: "testPassword",
      confirmPassword: "testPassword",
    };
    mockReq = { body: validBody };
    const testFunc = validateResource(createUserSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(next).toBeCalledTimes(1);
  });

  it("Calls next func on valid update password input", () => {
    const validBody = {
      currentPassword: "testPassword",
      newPassword: "updatedPassword",
      confirmPassword: "updatedPassword,",
    };
    mockReq = { body: validBody };
    const testFunc = validateResource(updatePasswordSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(next).toBeCalledTimes(1);
  });

  it("Calls next func on valid update user input", () => {
    const validBody = {
      firstName: "Sarah",
      lastName: "Connor",
    };
    mockReq = { body: validBody };
    const testFunc = validateResource(updateUserSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(next).toBeCalledTimes(1);
  });
