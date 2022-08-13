import Debug from "debug";
import { Request, Response } from "express";
import Robot from "../types/robotType";

const debug = Debug("robots:server:controllers:robotsController");

const getRobots = (req: Request, res: Response) => {
  const robotList: Robot[] = [];

  res.status(200).json({ robots: robotList });
  debug("La lista de robots ha sido enviada con éxito");
};

export default getRobots;
