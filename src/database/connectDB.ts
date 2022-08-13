import chalk from "chalk";
import { debug } from "console";
import mongoose from "mongoose";

const connectDB = (mongoURL: string) =>
  mongoose.connect(mongoURL, (error) => {
    if (error) {
      debug(chalk.red("Error connecting to Database"));
      return;
    }

    debug(chalk.green("Connected to Database"));
  });

export default connectDB;
