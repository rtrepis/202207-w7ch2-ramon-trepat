import Debug from "debug";
import chalk from "chalk";
import app from "../loadApp";

const debug = Debug("robots:startSever");

const startServer = (port: number) =>
  app.listen(port, () => {
    debug(chalk.blue(`Server listening on http://localhost:${port}`));
  });

export default startServer;
