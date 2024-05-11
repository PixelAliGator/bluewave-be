import { NextFunction, Request, Response } from 'express';
import productModel, { ProductInterface } from '../models/productModel';

const addProduct  = async (req: Request, res: Response, next:NextFunction) => {
    try{
        const data:ProductInterface = req.body;
        const newProduct = await productModel.create(data);
        res.status(201).json(newProduct);
    }catch(e){
        next(e);
    }
}

const getProduct = async(req: Request, res: Response, next:NextFunction) => {
    try{
        const id = req.query.id
        if(!id){
            const product = await productModel.find({});
            res.status(201).json(product);
        }else{
            const product = await productModel.findById(id);
            res.status(201).json(product);
        }
        
    }catch(e){
        next(e);
    }
}

const deleteProduct  = async(req: Request, res: Response, next:NextFunction)  => {
    try{
        const id = req.query.id
        const product = await productModel.findByIdAndDelete(id);
        res.status(200).json("Deleted");
    }catch(e){
        next(e);
    }
}

export default{
    addProduct,
    getProduct,
    deleteProduct
}