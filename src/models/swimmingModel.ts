import mongoose,{Model} from "mongoose";
import swimmingSchema from '../schemas/swimmingSchema'

enum difficulty{
    Easy = 1,
    Medium = 2,
    Hard = 3
}

enum activityType {
    Swimming = 1,
}

export interface swimmingType {
    "_id": string,
    "type":activityType,
    "user_id": string;
    "createdAt": Date;
    "updatedAt": Date;
    "timeTaken": number;
    "numberOfLaps": number;
    "difficulty"?: difficulty;
    "distance"?: number;
    "heartRate"?: number;
    "calories"?: number;
}

const swimmingTable:Model<swimmingType> = mongoose.model<swimmingType>('swimmingTable', swimmingSchema);
export default swimmingTable;

