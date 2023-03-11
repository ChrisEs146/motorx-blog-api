import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

function validateResource(customSchema: AnyZodObject) {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      customSchema.parse({ ...req.body, ...req.params });
      next();
    } catch (error: unknown) {
      res.status(400).json(error);
    }
  };
}

export default validateResource;
