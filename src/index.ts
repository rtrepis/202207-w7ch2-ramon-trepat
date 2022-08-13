import "./loadEnvironment";
import morgan from "morgan";
import robotsRouter from "./server/routers/robotsRouter";
import connectDB from "./database/connectDB";
import startServer from "./server/startServer";
import app from "./loadApp";
import endpointError from "./server/middlewares/errors";
import configCors from "./configCors";

const port = process.env.PORT ?? 4000;
const mongoURL = process.env.MONGO_URI;

// eslint-disable-next-line consistent-return

app.use(configCors);
app.use(morgan("dev"));

app.use("/robots", robotsRouter);

app.use(endpointError);

(async () => {
  connectDB(mongoURL);
  startServer(+port);
})();
