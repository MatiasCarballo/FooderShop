import { Router, Request, Response } from "express";
import Product from "../db/models/product";
import Cart from "../db/models/cart";

const router = Router();

/*

*/

router.get('/',async (_req:Request, res:Response) => {
  const cart = await Cart.find();
  res.status(200).json(cart)
})

router.get('/:id',async (req:Request, res:Response) => {//muestro solo el contenido del cart y quantity
  const cart = await Cart.findOne({user:req.params.id});
  if(cart){
    res.status(200).json(cart.products);
  }
});

router.post('/', async (req:Request, res:Response) => { 
  try {
    const cart = await Cart.findOne({user:req.body.idUser}); 
    if(cart){
      const existingProduct = cart.products.findIndex(
        (item) => item.product.toString() === req.body.product);
      
      if(existingProduct !== -1){ //si existe el producto en el cart
        if(req.body.quantity === '+'){//si se agrega un mismo producto
          cart.products[existingProduct].quantity ++;
          cart.save();
          res.status(200).json(cart);
        }else if(req.body.quantity === '-'){//si se descuento un producto ya agregado 
          cart.products[existingProduct].quantity --;//### Agregar advertencia cuando "quantity" = 0 ###
          cart.save();
          res.status(200).json(cart);
        }else{//sumar los "quantity" si el producto se repite
          cart.products[existingProduct].quantity += Number(req.body.quantity);
          cart.save();
          res.status(200).json(cart);
        }   
      }else{//se crea un producto si no existe en el "cart"
        const nameP = await Product.findById(req.body.product);
        if(nameP){
          cart.products.push({ product:req.body.product, quantity:Number(req.body.quantity), name:nameP.name });
          await cart.save();
          res.status(200).json(cart);
        }
      } 
    }  
  } catch (e) {
    console.log(e);
  }
});

export default router;
