import express from "express";
import {config} from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";

//morgan package will give some lock description
//what type of req is handled,response and status of code
config();

const app=express();
//middlewares
app.use(express.json());

app.use("/api/v1",appRouter);

//remove it in production only in dev
app.use(morgan("dev"));

export default app;