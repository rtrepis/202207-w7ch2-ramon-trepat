import mongoose from "mongoose";
import Debug from "debug";
import chalk from "chalk";

const debug = Debug("robots:DB:connectDB");

const connectDB = (mongoURL: string) =>
  new Promise((resolve, reject) => {
    mongoose.connect(mongoURL, (error) => {
      if (error) {
        debug(chalk.red("Error connecting to Database"));
        reject(error);
        return;
      }

      debug(chalk.green("Connected to Database"));
      resolve(true);
    });
  });

export default connectDB;
