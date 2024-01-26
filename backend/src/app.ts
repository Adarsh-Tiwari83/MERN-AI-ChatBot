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
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

app.use(express.static(path.join(__dirname,'../../frontend/dist')));

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../../frontend/dist/index.html'));
// })

app.get('/',(req,res)=>{
    res.json('Hello guys');
    
})
export default app;
