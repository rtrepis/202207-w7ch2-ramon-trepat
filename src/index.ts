import "./loadEnvironment";
import Debug from "debug";
import chalk from "chalk";
import express from "express";
import morgan from "morgan";
import startServer from "./server/startServer";

const app = express();
const debug = Debug("robots:index");

const port = process.env.PORT ?? 4000;

app.use(morgan("dev"));

startServer(+port);
