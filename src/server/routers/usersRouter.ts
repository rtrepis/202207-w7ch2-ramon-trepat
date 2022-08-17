import express from "express";
import loginUser from "../controllers/usersControllers";

const userRouter = express.Router();

userRouter.post("/", loginUser);

export default userRouter;
