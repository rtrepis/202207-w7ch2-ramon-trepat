import "./loadEnvironment";
import Debug from "debug";
import express from "express";
import chalk from "chalk";
import morgan from "morgan";
import robotsRouter from "./server/routers/robotsRouter";

const debug = Debug("robots:index");
const app = express();

const port = process.env.PORT;

app.use(morgan("dev"));

app.use("/robots", robotsRouter);

app.listen(port, () => {
  debug(chalk.blue(`Serve listening on http://localhost:${port}`));
});
