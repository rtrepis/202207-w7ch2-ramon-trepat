import Debug from "debug";
import chalk from "chalk";
import { NextFunction, Request, Response } from "express";
import CustomError from "../server/types/serverTypes";

const debug = Debug("robots:middleware:errors:");

const generalError = (
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

export default generalError;
