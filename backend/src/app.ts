import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import path from 'path'

import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();
import appRouter from "./routes/index.js";

//middlewares
app.use(cors({ origin: "https://mern-ai-chat-bot-3qjx.vercel.app",methods:["GET","POST"],credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it in production
app.use(morgan("dev"));
app.get('/',(req,res)=>{
  res.json("HELLO");
})
app.use("/api/v1", appRouter);



export default app;
