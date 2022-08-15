import express from "express";
import { getRobots, deleteRobot } from "../controllers/robotsControllers";

const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);
robotsRouter.delete("/delete/:idRobot", deleteRobot);

export default robotsRouter;
