import mongoose, { Model } from "mongoose";
import productSchema from "../schemas/productSchema";

export interface ProductInterface {
    name: string, 
    price:number,
    image: string,
    description: string, 
    stripe_id: string,
    stripePrice: string 
}

const productModel:Model<ProductInterface> = mongoose.model<ProductInterface>('productTable', productSchema);
export default productModel;