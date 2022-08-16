import express from "express";
import { getRobots, deleteRobot } from "../controllers/robotsControllers";
import authentication from "../middlewares/authentication";

const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);
robotsRouter.delete("/delete/:idRobot", authentication, deleteRobot);

export default robotsRouter;
