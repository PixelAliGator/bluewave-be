import mongoose,{Model} from "mongoose";

import userProfileSchema from "../schemas/userProfileSchema";

interface userProfileType {
    "age": number;
    "height": number;
    "weight": number;
    "gender": string;
    "bmi": number;
}

const userProfileModel:Model<userProfileType> = mongoose.model<userProfileType>('userProfile', userProfileSchema);
export default userProfileModel;