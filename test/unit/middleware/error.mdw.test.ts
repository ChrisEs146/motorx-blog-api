import { handleError, handleNotFoundResource } from "src/middleware/error.middleware.js";
import { NextFunction, Request, Response } from "express";
import { ICustomError } from "src/middleware/middleware.interfaces.js";

describe("Error handler", (): void => {
  let mockErr: Partial<ICustomError>;
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let next: NextFunction;

  beforeEach((): void => {
    mockErr = {};
    mockReq = {};
    mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    next = jest.fn();
  });

  it("Returns 500 status code when status isn't defined", (): void => {
    mockErr = { statusCode: undefined, message: "Internal Server Error" };
    handleError(mockErr as ICustomError, mockReq as Request, mockRes as Response, next);
    expect(mockRes.status).toBeCalledWith(500);
  });

  it("Shows 500 default JSON message", (): void => {
    const expectedRes = {
      Message: "Internal Server Error",
      Error: undefined,
      Status: 500,
      Stack: null,
    };
    handleError(mockErr as ICustomError, mockReq as Request, mockRes as Response, next);
    expect(mockRes.json).toBeCalledWith(expectedRes);
  });

  it("Shows JSON message with custom error", () => {
    const expectedRes = {
      Message: "User does not exist",
      Error: "Not Found",
      Status: 404,
      Stack: null,
    };
    mockErr = { message: "User does not exist", statusCode: 404, error: "Not Found" };
    handleError(mockErr as ICustomError, mockReq as Request, mockRes as Response, next);
    expect(mockRes.json).toBeCalledWith(expectedRes);
  });
});
    };
  });

  it("Shows internal server error 500 when status isn't defined", (): void => {
    const expectedRes = {
      message: "Internal Server Error",
    };
    mockErr = { statusCode: undefined, message: "Internal Server Error" };
    handleError(mockErr as ICustomError, mockReq as Request, mockRes as Response);
    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.json).toBeCalledWith(expectedRes);
  });
});
