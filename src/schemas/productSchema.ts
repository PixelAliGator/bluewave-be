import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    image: { type: String, required: true },
    description: {type: String, required: true},
    stripe_id: {type: String, required: true},
    stripePrice: {type: String, required: true},
},{timestamps:true})
  
  export default productSchema