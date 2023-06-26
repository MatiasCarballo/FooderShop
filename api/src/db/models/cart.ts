import { Schema, model, Document } from "mongoose";

interface ICartItem {
    product: Schema.Types.ObjectId;
    name:string;
    quantity: number;
  }
  
  interface ICart extends Document {
    products: ICartItem[];
    user: string;
  }

const cartSchema = new Schema({
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        name:{
          type:String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    user: {
      type: String, // Puedes ajustar esto según tus necesidades
      required: true,
    },
  });

export default model<ICart>('Cart', cartSchema);