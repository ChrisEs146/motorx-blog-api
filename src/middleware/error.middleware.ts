import { Request, Response } from "express";
import { CustomError } from "./middleware.interfaces.js";

/**
 * Global error handler
 * @param err Error object
 * @param _req Request
 * @param res Response
 */
export function handleError(err: CustomError, _req: Request, res: Response): void {
  const status = err.statusCode || err.status || 500;
  res.status(status).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
}

/**
 * Global error handler for 404 errors
 * @param err Error object
 * @param _req Request
 * @param res Response
 */
export function handleNotFoundError(err: CustomError, _req: Request, res: Response): void {
  res.status(400).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
}
