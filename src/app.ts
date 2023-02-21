import express, { Request, Response, Application } from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";

const app: Application = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(cors()); //TODO:Declare corsOptions

// Limiter
// Routes
app.use("api/v1/users", function (_req: Request, res: Response) {
  res.send("It works");
});
// Global error handler

export default app;
