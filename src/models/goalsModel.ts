import mongoose, { Model } from "mongoose";
import goalsSchema from "../schemas/goalsSchema";


export interface goalsType {
    "_id": string,
    "user_id:": string;
    "createdAt": Date;
    "updatedAt": Date;
    "timeTaken": number;
    "numberOfLaps": number;
}


const goalsModel:Model<goalsType> = mongoose.model<goalsType>('goalsTable', goalsSchema);
export default goalsModel;