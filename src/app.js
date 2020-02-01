import express from "express";
import { join } from "path";
import helmet from "helmet";
import logger from "morgan";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use("/images", express.static(join(__dirname, "images")));
app.use(logger("dev"));

app.get("/", (req, res) => res.render("home"));

export default app;
