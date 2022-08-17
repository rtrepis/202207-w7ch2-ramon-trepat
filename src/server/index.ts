import "../loadEnvironment";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import robotsRouter from "./routers/robotsRouter";
import userRouter from "./routers/usersRouter";
import { endpointError, generalError } from "./middlewares/errors";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use("/robots", robotsRouter);
app.use("/users", userRouter);

app.use(endpointError);
app.use(generalError);

export default app;
