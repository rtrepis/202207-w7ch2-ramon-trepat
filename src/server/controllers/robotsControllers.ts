import Debug from "debug";
import chalk from "chalk";
import { Request, Response } from "express";
import Robot from "../../database/models/Robot";

const debug = Debug("robots:server:controllers:robotsController");

const getRobots = async (req: Request, res: Response) => {
  const robotList = await Robot.find({}, { _id: false });

  res.status(200).json(robotList);
  debug(chalk.green("The list of robots has been sent successfully"));
};

export default getRobots;
