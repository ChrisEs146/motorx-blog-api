import { NextFunction, Request, Response } from "express";
import { ICustomError } from "./middleware.interfaces.js";

/**
 * Global error handler
 * @param err Error object
 * @param _req Request
 * @param res Response
 */
/* eslint-disable */
  const status = err.statusCode ?? 500;
  res.status(status);
  return res.json({
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
/* eslint-disable */
  });
}
