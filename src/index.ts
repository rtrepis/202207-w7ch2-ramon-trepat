import "./loadEnvironment";
import connectDB from "./database/connectDB";
import startServer from "./server/startServer";

const port = process.env.PORT ?? 4000;
const mongoURL = process.env.MONGO_URI;

// eslint-disable-next-line consistent-return

(async () => {
  connectDB(mongoURL);
  startServer(+port);
})();
