import express from "express";
import cors from "cors";
import morgan from "morgan";
import { routes } from "./routes/index.js";
import config from "./config.js";
import { errorSync } from "./middlewares/errorSync.js";
import { errorHandlerJSON } from "./middlewares/errorHandlerJSON.js";

const app = express();

app.use(cors(config.cors));
app.use(express.json());
app.use(errorSync);
app.use(errorHandlerJSON);
app.use(morgan('dev'));
routes(app);

export { app }