import "./loadEnvironment";
import morgan from "morgan";
import cors from "cors";
import robotsRouter from "./server/routers/robotsRouter";
import connectDB from "./database/connectDB";
import startServer from "./server/startServer";
import app from "./loadApp";
import { endpointError, generalError } from "./server/middlewares/errors";

const port = process.env.PORT ?? 4000;
const mongoURL = process.env.MONGO_URI;

// eslint-disable-next-line consistent-return

app.use(cors());
app.use(morgan("dev"));

app.use("/robots", robotsRouter);

app.use(endpointError);
app.use(generalError);

(async () => {
  connectDB(mongoURL);
  startServer(+port);
})();
