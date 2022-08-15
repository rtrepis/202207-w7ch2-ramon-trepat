import mongoose from "mongoose";
import Debug from "debug";
import chalk from "chalk";

const debug = Debug("robots:DB:connectDB");

const connectDB = (mongoURL: string) =>
  new Promise((resolve, reject) => {
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        const newDocument = { ...ret };

        // eslint-disable-next-line no-underscore-dangle
        delete newDocument.__v;
        // eslint-disable-next-line no-underscore-dangle
        delete newDocument._id;

        return newDocument;
      },
    });

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
