import { NextFunction,Response,Request } from "express";
import user from "../models/user.js";
import { hash,compare } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";

export const getAllUser =async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const users= await user.find()
        return res.status(200).json({message:"ok",users})
    }catch(error){
        console.log(error);
        return res.status(404).json({message:"ERROR",cause:error.message})
    }
}

export const userSignup =async(req:Request,res:Response,next:NextFunction)=>{
    // For user Sign up
    try{
        const {name,email,password} = req.body
        const existingUser=await user.findOne({email})
        if(existingUser){return res.status(401).send("User Already Registered.")}
        const hashed = hash(password,10)
        const users=new user({name,email,password:hashed}) 
        await users.save()
        // Storing cookies for new user.
        res.clearCookie(COOKIE_NAME,{
            domain:"localhost",
            httpOnly:true,
            signed:true,
            path:"/"
        })
        const token=createToken(users._id.toString(),users.email,"7d");
        const expires=new Date()
        expires.setDate(expires.getDate()+7);
        res.cookie(COOKIE_NAME,token,{path:"/",domain:"localhost",expires,httpOnly:true,signed:true})
        return res.status(201).json({message:"ok",email:users.email,name:users.name})
    }catch(error){
        console.log(error);
        return res.status(404).json({message:"ERROR",cause:error.message})
    }
}

export const userLogin =async(req:Request,res:Response,next:NextFunction)=>{
    // for user Login
    try{
        const {email,password} = req.body
        const exist=await user.findOne({email})
        if(!exist){
            return res.status(401).send("User is not found")
        }
        const ispass=await compare(password,exist.password)
        if(!ispass){
            return res.status(403).send("Incorrect Password.");
        }
        res.clearCookie(COOKIE_NAME,{
            domain:"localhost",
            httpOnly:true,
            signed:true,
            path:"/"
        })
        const token=createToken(exist._id.toString(),exist.email,"7d");
        const expires=new Date()
        expires.setDate(expires.getDate()+7);
        res.cookie(COOKIE_NAME,token,{path:"/",domain:"localhost",expires,httpOnly:true,signed:true})
        return res.status(201).json({message:"ok",email:exist.email,name:exist.name})
    }catch(error){
        console.log(error);
        return res.status(404).json({message:"ERROR",cause:error.message})
    }
}

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //user token check
    const users = await user.findById(res.locals.jwtData.id);
    if (!users) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (users._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    return res
      .status(200)
      .json({ message: "OK", name: users.name, email: users.email });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};


export const userLogout = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //user token check
      const users = await user.findById(res.locals.jwtData.id);
      if (!users) {
        return res.status(401).send("User not registered OR Token malfunctioned");
      }
      if (users._id.toString() !== res.locals.jwtData.id) {
        return res.status(401).send("Permissions didn't match");
      }
        res.clearCookie(COOKIE_NAME,{
            domain:"localhost",
            httpOnly:true,
            signed:true,
            path:"/"
        });
      return res
        .status(200)
        .json({ message: "OK", name: users.name, email: users.email });
    } catch (error) {
      console.log(error);
      return res.status(200).json({ message: "ERROR", cause: error.message });
    }
  };