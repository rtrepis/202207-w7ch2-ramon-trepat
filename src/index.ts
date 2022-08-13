import "./loadEnvironment";
import express from "express";
import morgan from "morgan";
import startServer from "./server/startServer";
import connectDB from "./database/connectDB";

const app = express();

const port = process.env.PORT ?? 4000;
const mongoURL = process.env.MONGO_URI;

app.use(morgan("dev"));

startServer(+port);
connectDB(mongoURL);
