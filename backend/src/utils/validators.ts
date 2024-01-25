import { log } from "console";
import { NextFunction,Response,Request } from "express";
import { ValidationChain, body, validationResult } from "express-validator";

export const validate= (validations: ValidationChain[])=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        // console.log("valid");
        
        for(let valid of validations){
            const result=await valid.run(req);
            if(!result.isEmpty()){
                break;
            }
        }
        const errors=validationResult(req);
        if(errors.isEmpty()){
            return next();
        }
        return res.status(422).json({errors:errors.array()}) // errors.array() converts errors to array.
    }
}

export const loginValidator = [
    body("email").trim().isEmail().withMessage("email is required"),
    body("password").trim().isLength({min:6}).withMessage("Atleast password of length 6 is required.")
];

export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator
];

export const chatCompletionValidator = [
    body("message").notEmpty().withMessage("Message is required"),
];