import { NextFunction, Request, Response } from "express";
import Debug from "debug";
import chalk from "chalk";
import CustomError from "../types/serverTypes";

const debug = Debug("robots:server:middlewares:errors");

export const endpointError = (req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });

  debug(chalk.red("Client sends an unknown endpoint"));
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const errorCode = error.code ?? 500;

  const publicMessage = error.publicMessage ?? "There was an error";
  const privatMessage = error.privatMessage ?? "GeneralError";

  res.status(errorCode).json({ error: publicMessage });
  debug(chalk.red(privatMessage));
};
