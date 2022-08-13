import "./loadEnvironment";
import Debug from "debug";
import express from "express";
import chalk from "chalk";
import morgan from "morgan";

const debug = Debug("robots:index");
const app = express();

const port = process.env.PORT;

app.use(morgan("dev"));

app.listen(port, () => {
  debug(chalk.blue(`Serve listening on http://localhost:${port}`));
});
