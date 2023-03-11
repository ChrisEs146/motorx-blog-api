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

  it("Calls next func on valid login input", () => {
    const validBody = {
      email: "arthur@email.com",
      password: "testPassword",
    };
    mockReq = { body: validBody };
    const testFunc = validateResource(logInUserSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(next).toBeCalledTimes(1);
  });

  it("Calls next func on valid reset email input", () => {
    const validBody = {
      email: "arthur@email.com",
    };
    mockReq = { body: validBody };
    const testFunc = validateResource(resetEmailSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(next).toBeCalledTimes(1);
  });

  it("Calls next func on valid forgot password input", () => {
    const validBody = {
      password: "testPassword",
      confirmPassword: "testPassword",
    };
    mockReq = { body: validBody };
    const testFunc = validateResource(forgotPasswordSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(next).toBeCalledTimes(1);
  });
});

describe("validate create user schema", () => {
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

  it("Must throw error first name is required", () => {
    const invalidBody = {
      firstName: undefined,
      lastName: "Morgan",
      email: "arthur@email.com",
      password: "testPassword",
      confirmPassword: "testPassword",
    };
    mockReq = { body: invalidBody };
    const expectedRes = {
      message: "First name is required",
    };
    const testFunc = validateResource(createUserSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(mockRes.json).toBeCalledWith(expectedRes);
    expect(mockRes.status).toBeCalledWith(400);
  });

  it("Must throw error last name must be string", () => {
    const invalidBody = {
      firstName: "Arthur",
      lastName: 24,
      email: "arthur@email.com",
      password: "testPassword",
      confirmPassword: "testPassword",
    };
    mockReq = { body: invalidBody };
    const expectedRes = {
      message: "Last name must be a string",
    };
    const testFunc = validateResource(createUserSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(mockRes.json).toBeCalledWith(expectedRes);
    expect(mockRes.status).toBeCalledWith(400);
  });

  it("Must throw error invalid email", () => {
    const invalidBody = {
      firstName: "Arthur",
      lastName: "Morgan",
      email: "arthur@",
      password: "testPassword",
      confirmPassword: "testPassword",
    };
    mockReq = { body: invalidBody };
    const expectedRes = {
      message: "Invalid email address",
    };
    const testFunc = validateResource(createUserSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(mockRes.json).toBeCalledWith(expectedRes);
    expect(mockRes.status).toBeCalledWith(400);
  });

  it("Must throw error password at least 8 chars long", () => {
    const invalidBody = {
      firstName: "Arthur",
      lastName: "Morgan",
      email: "arthur@email.com",
      password: "test",
      confirmPassword: "testPassword",
    };
    mockReq = { body: invalidBody };
    const expectedRes = {
      message: "Password must be at least 8 chars long",
    };
    const testFunc = validateResource(createUserSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(mockRes.json).toBeCalledWith(expectedRes);
    expect(mockRes.status).toBeCalledWith(400);
  });

  it("Must throw error confirm password is required", () => {
    const invalidBody = {
      firstName: "Arthur",
      lastName: "Morgan",
      email: "arthur@email.com",
      password: "testPassword",
      confirmPassword: undefined,
    };
    mockReq = { body: invalidBody };
    const expectedRes = {
      message: "Confirm password is required",
    };
    const testFunc = validateResource(createUserSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(mockRes.json).toBeCalledWith(expectedRes);
    expect(mockRes.status).toBeCalledWith(400);
  });

  it("Must throw error extra props provided", () => {
    const invalidBody = {
      firstName: "Arthur",
      lastName: "Morgan",
      email: "arthur@email.com",
      password: "testPassword",
      confirmPassword: "testPassword",
      role: "Admin",
    };
    mockReq = { body: invalidBody };
    const testFunc = validateResource(createUserSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(mockRes.status).toBeCalledWith(400);
  });
});

describe("validate update password schema", () => {
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

  it("Must throw error pwd is required", () => {
    const invalidBody = {
      currentPassword: undefined,
      newPassword: "updatedPassword",
      confirmPassword: "updatedPassword",
    };
    mockReq = { body: invalidBody };
    const expectedRes = {
      message: "Password is required",
    };
    const testFunc = validateResource(updatePasswordSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(mockRes.json).toBeCalledWith(expectedRes);
    expect(mockRes.status).toBeCalledWith(400);
  });

  it("Must throw error pwd must be a string", () => {
    const invalidBody = {
      currentPassword: "testPassword",
      newPassword: 12,
      confirmPassword: "updatedPassword",
    };
    mockReq = { body: invalidBody };
    const expectedRes = {
      message: "Password must be a string",
    };
    const testFunc = validateResource(updatePasswordSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(mockRes.json).toBeCalledWith(expectedRes);
    expect(mockRes.status).toBeCalledWith(400);
  });

  it("Must throw error pwd must be at least 8 chars long", () => {
    const invalidBody = {
      currentPassword: "testPassword",
      newPassword: "updatedPassword",
      confirmPassword: "upd",
    };
    mockReq = { body: invalidBody };
    const expectedRes = {
      message: "Confirm password must be at least 8 chars long",
    };
    const testFunc = validateResource(updatePasswordSchema);
    testFunc(mockReq as Request, mockRes as Response, next);
    expect(mockRes.json).toBeCalledWith(expectedRes);
    expect(mockRes.status).toBeCalledWith(400);
  });
});
