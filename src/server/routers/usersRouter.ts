import express from "express";
import loginUser from "../controllers/usersControllers";

const userRouter = express.Router();

userRouter.post("/login", loginUser);

export default userRouter;
