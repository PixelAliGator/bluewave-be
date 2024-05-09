import mongoose from "mongoose";

const swimmingSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    type: {type:String,enum: ["Easy", "Medium", "Hard"], required: true},
    createdAt: {type: Date,required: true},
    updatedAt: {type: Date, required: true},
    timeTaken: {type: Number, required: true},
    numberOfLaps: {type: Number, required: true},
    difficulty: {type: String, enum: ["Easy", "Medium", "Hard"],required: false},
    distance: {type: Number, required: false},
    heartRate: {type: Number, required: false},
    calories: {type: Number, required: false},
},{timestamps:true})
  
  export default swimmingSchema