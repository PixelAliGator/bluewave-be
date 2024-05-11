import { NextFunction, Request, Response } from 'express';
import goalsModel, { goalsType } from '../models/goalsModel';


async function createGoal(req: Request, res: Response, next: NextFunction) {
    try {
        console.log(req.body);
        const activityData:goalsType = req.body;
         activityData.createdAt = new Date();
        activityData.updatedAt = new Date();
        const newActivity = await goalsModel.create(activityData);
        res.status(201).json(newActivity)
    } catch (e) {
        next(e)
    }
}


async function getGoal(req: Request, res: Response, next: NextFunction){
    try {
        const activityId = req.query.id;
        console.log(activityId);
        const activty = await goalsModel.findById(activityId)
        res.json(activty)
    } catch (e) {
        next(e)
    }
}

async function updateGoal(req: Request, res: Response, next: NextFunction){
    try {
        console.log(req.body);
        const activityData:goalsType = req.body;
        activityData.updatedAt = new Date(0);
        const activty = await goalsModel.findByIdAndUpdate(activityData._id, activityData)
        res.json(activty)
    } catch (e) {
        next(e)
    }
}


async function deleteGoal(req: Request, res: Response, next: NextFunction){
    try {
        const activityData:goalsType = req.body;
         await goalsModel.findByIdAndDelete(activityData._id)
        res.status(200).json(`Deleted ${activityData._id}`)
    } catch (e) {
        next(e)
    }
}

export default{
    createGoal,
    getGoal,
    updateGoal,
    deleteGoal
}