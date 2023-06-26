import { Router, Request, Response} from "express";
import Product from "../db/models/product";

const router = Router();


router.get('/',async (_req:Request,res:Response) => {
    const product = await Product.find();
    res.status(200).json(product);
});

router.get('/:id',async (req:Request,res:Response) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (e) {
        console.log(e);
    }
});

router.post('/',async (req:Request, res:Response) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (e) {
        console.log(e); 
    }
});

router.put('/:id',async (req:Request, res:Response) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(product);
    } catch (e) {
        console.log(e);    
    }
});

router.delete('/:id',async (req:Request, res:Response) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(204).json(product)
    } catch (e) {
        console.log(e);
        
    }
});

export default router;