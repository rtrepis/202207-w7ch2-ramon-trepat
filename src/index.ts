import "./loadEnvironment";
import Debug from "debug";
import chalk from "chalk";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import startServer from "./server/startServer";
import connectDB from "./database/connectDB";

const app = express();
const debug = Debug("robots:index");

const port = process.env.PORT ?? 4000;
const mongoURL = process.env.MONGO_URI;

app.use(morgan("dev"));

startServer(+port);
connectDB(mongoURL);
