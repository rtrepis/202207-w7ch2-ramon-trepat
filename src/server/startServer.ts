import Debug from "debug";
import chalk from "chalk";
import express from "express";

const debug = Debug("robots:startSever");
const app = express();

const startServer = (port: number) =>
  app.listen(port, () => {
    debug(chalk.blue(`Server listening on http://localhost:${port}`));
  });

export default startServer;
