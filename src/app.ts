import express, { Application } from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import { handleError, handleNotFoundResource } from "./middleware/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";

const app: Application = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(cors()); //TODO:Declare corsOptions

// Limiter
// Routes
app.use("/api/user", authRoutes);
// Global error handler
app.use(handleError);
app.use(handleNotFoundResource);

export default app;
