import User, { userSchemaType } from '../models/userModel'
import { NotValid } from '../lib/errors'
import { secret } from '../config/environment'
import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import userProfileModel from '../models/userProfileModel'

async function register(req: Request, res: Response, next: NextFunction) {
  try {
    console.log(req.body)
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } catch (e) {
    next(e)
  }
}


export default {
  login,
  register,
  createUserProfile,
  getUserProfile,
  updateUserProfile,
}