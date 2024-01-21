import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cors from 'cors'
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
config();

const app=express();

// Middle Ware
app.use(cors({origin:'http://localhost:5173',credentials:true}))
app.use(express.json);
// Another Middleware but removed at the time of production.//
app.use(morgan("dev"));
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use("/api/v1",appRouter)
// Get:- For getting request.
// Post:- For rendering page after get request.
// Put:- for changing page dynamically.
// Delete:- for deleting some thing from static page.

app.get("/",(req,res,next)=>{
    return res.send("Hello Thanks for coming to Ai chatbot.");
});

app.get("/user/:id",(req,res,next)=>{
    console.log(req.params.id);
    return res.send("Hello");
});

export default app;