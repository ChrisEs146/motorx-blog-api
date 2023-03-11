import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

function validateResource(customSchema: AnyZodObject) {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      customSchema.parse({ ...req.body, ...req.params });
      next();
    } catch (error: unknown) {
      const formattedError = error as ZodError;
      res.status(400).json({
        message: formattedError.issues.at(0)?.message,
      });
    }
  };
}

export default validateResource;
