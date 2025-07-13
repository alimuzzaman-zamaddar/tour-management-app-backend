import cors from "cors";
import express, { Request, Response } from "express";

import notFound from "./app/middlewares/notFound";
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalerrorhandler";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Tour Management System Backend",
  });
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;



// PORT=5000
// DB_URL=mongodb+srv://tourmanagementapp:tourmanagementapp@cluster0.fmznhrh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// NODE_ENV=development


// # JWT
// JWT_ACCESS_SECRET=access_secret
// JWT_ACCESS_EXPIRES=1d
// # JWT
// JWT_REFRESH_SECRET=refresh_secret
// JWT_REFRESH_EXPIRES=30d

// # BCRYPT
// BCRYPT_SALT_ROUND=10

// # SUPER ADMIN
// SUPER_ADMIN_EMAIL=super@gmail.com
// SUPER_ADMIN_PASSWORD=12345678