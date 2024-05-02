import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import routes from "./routes/index.js";
import logger from "./middlewares/logger.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(routes);

export default app;
