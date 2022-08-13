import Debug from "debug";
import chalk from "chalk";
import { Request, Response } from "express";
import Robot from "../../database/models/Robot";

const debug = Debug("robots:server:controllers:robotsController");

const getRobots = async (req: Request, res: Response) => {
  const robotList = await Robot.find({}, { _id: false });

  res.status(200).json({ robots: robotList });
  debug(chalk.green("La lista de robots ha sido enviada con éxito"));
};

export default getRobots;
