import "./loadEnvironment";
import morgan from "morgan";
import robotsRouter from "./server/routers/robotsRouter";
import connectDB from "./database/connectDB";
import startServer from "./server/startServer";
import app from "./loadApp";

const port = process.env.PORT ?? 4000;
const mongoURL = process.env.MONGO_URI;

app.use(morgan("dev"));

app.use("/robots", robotsRouter);

(async () => {
  connectDB(mongoURL);
  startServer(+port);
})();
