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
    next = jest.fn();
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
