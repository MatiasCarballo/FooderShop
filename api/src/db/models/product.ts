import { Schema, model, Document } from "mongoose";

export interface Product extends Document {
    name:string,
    description:string,
    image:string,
    category:string,
    price:number,

}

const ProductSchema = new Schema(
    {
        name:{
            type:String,
            required: true
        },
        description:{
            type:String,
            required: true
        },
        image:{
            type:String,
            //required: true
        },
        category:{
            type:String,
            required: true
        },
        price:{
            type:Number,
            required: true
        },
    }
);

export default model<Product>("Product", ProductSchema);