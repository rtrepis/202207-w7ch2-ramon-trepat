import { Request, Response } from "express";
import Debug from "debug";
import chalk from "chalk";

const debug = Debug("robots:server:middlewares:errors");

const endpointError = (req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });

  debug(chalk.red("Client sends an unknown endpoint"));
};

export default endpointError;
