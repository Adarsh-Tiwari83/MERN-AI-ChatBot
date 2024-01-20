import {Request,Response,NextFunction} from "express";
import User from "../models/user.js";
import {hash} from "bcrypt";//to hash password

export const getAllUsers=async (req:Request,res:Response,next:NextFunction)=>{
    //get all users
    try{
        const users=await User.find();
        return res.status(200).json({message:"ok",users});
    }catch(error){
        console.log(error);
        return res.status(200).json({message:"ERROR",cause:error.message});
    }
};


export const userSignup=async (req:Request,res:Response,next:NextFunction)=>{
    //get all users
    try{
        const {name,email,password}= req.body;
        const hashedPassword=await hash(password,10);
        const user=new User({name,email,password: hashedPassword});
        await user.save();
        return res.status(200).json({message:"ok",id: user._id.toString()});
    }catch(error){
        console.log(error);
        return res.status(200).json({message:"ERROR",cause:error.message});
    }
};