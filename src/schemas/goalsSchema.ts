import mongoose from "mongoose";

const goalsSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    createdAt: {type: Date,required: true},
    updatedAt: {type: Date, required: true},
    timeTaken: {type: Number, required: true},
    numberOfLaps: {type: Number, required: true}
},{timestamps:true})
  
  export default goalsSchema