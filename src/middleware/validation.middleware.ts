import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

function validateResource(customSchema: AnyZodObject) {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      customSchema.parse({ body: req.body as unknown, params: req.params });
      next();
    } catch (error: unknown) {
      res.status(400).json(error);
    }
  };
}

export default validateResource;
