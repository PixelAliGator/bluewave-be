import { NextFunction, Request ,Response } from "express";
import User from "../models/userModel";
import { userSchemaType } from "../models/userModel";
import { NotValid } from "../lib/errors";
import jwt from "jsonwebtoken";
import { secret } from "../config/enviorment";

//! Register a user
async function register(req: Request, res: Response, next: NextFunction) {
  try {
    console.log(req.body)
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } catch (e) {
    next(e)
  }
}

//!Login registered user
async function login(req: Request, res: Response, next: NextFunction) {
    try {
      if(req.body == null){
        throw new NotValid('Body is empty', 400)
      }
      const body:userSchemaType = req.body;
      const email:string = body.email;
      if(!email) throw new NotValid('Email is required', 400);
      const user: userSchemaType | null = await  User.findOne({ email: email });
  
      if (!user) {
        throw new NotValid('User not found', 404)
      }
      const isValidPw = user.validatePassword(body.password)
      if (!isValidPw) {
        throw new NotValid('Wrong password', 400)
      }
  
      // Create jwt and send to user
      const token = jwt.sign(
        {
          user: {
            id: user._id,
            email: user.email,
            username: user.username,
            profileId: user.profileId,
            profileCompleted: user.profileCompleted
          }
        },
        secret,
        //user login duration
        { expiresIn: '2h' }
      )
      //decide what to send back
  
      res.status(202).json({ message: 'Login Success!', token })
  
    } catch (e) {
      next(e)
    }
  }


  export default{
    login,
    register
  }