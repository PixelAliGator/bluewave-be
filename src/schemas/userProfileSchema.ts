import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    age: {type: Number},
    height: {type: Number},
    weight: {type: Number},
    gender: {type: String},
    bmi: {type: Number}
})

export default userProfileSchema