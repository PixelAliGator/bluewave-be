import {Request, Response, NextFunction} from 'express'
import swimmingTable from "../models/swimmingModel";
import { swimmingType } from "../models/swimmingModel";

async function createSwimmingActivity(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(req.body);
    const activityData: swimmingType = req.body;
    activityData.createdAt = new Date();
    activityData.updatedAt = new Date();
    const newActivity = await swimmingTable.create(activityData);
    res.status(201).json(newActivity);
  } catch (e) {
    next(e);
  }
}


async function getSwimmingActivity(req: Request, res: Response, next: NextFunction) {
  try {
      const activityId = req.query.id;
      if(activityId === '*'){
          const activties:swimmingType[] = await swimmingTable.find({});
          res.json(activties);
      }
      else if (activityId) {
        //@ts-ignore
          const id = req.currentUser.id;
          const activties:swimmingType[] = await swimmingTable.find({});
          activties.filter((activty) => activty.user_id === id);
          res.json(activties)
      } else {
          const activty = await swimmingTable.findById(activityId)
          res.json(activty)
      }

  } catch (e) {
      next(e)
  }
}

async function updateSwimmingActivity(req: Request, res: Response, next: NextFunction) {
  try {
      const activityData: swimmingType = req.body;
      activityData.updatedAt = new Date(0);
      const activty = await swimmingTable.findByIdAndUpdate(activityData._id, activityData)
      res.json(activty)
  } catch (e) {
      next(e)
  }
}

async function deleteSwimmingActivity(req: Request, res: Response, next: NextFunction) {
  try {
      let activityId = req.body.id
      if(!activityId){
         activityId = req.query.id;
      }
      await swimmingTable.findByIdAndDelete(activityId)
      res.status(200).json(`Deleted ${activityId}`)
  } catch (e) {
      next(e)
  }
}


export default {
  createSwimmingActivity,
  getSwimmingActivity,
  updateSwimmingActivity,
  deleteSwimmingActivity
}
