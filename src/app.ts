import { httpStatus } from 'http-status-codes';
import express, { Request, Response } from "express";
import cors from "cors"
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalerrorhandler";
import { notFound } from './app/middlewares/notFound';

const app = express();
app.use(express.json())

app.use(cors())

app.use("/api/v1", router)


app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "welcome to Tour management system Backend",
  });
});

app.use(globalErrorHandler)

app.use(notFound)

export default app;
