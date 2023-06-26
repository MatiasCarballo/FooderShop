import { Router, Request, Response } from "express";
import Users from '../db/models/user';
import Cart from "../db/models/cart";
const router = Router();


/*
auth
*/

router.get('/', async(_req:Request, res:Response)=>{
    try {
        const user = await Users.find()
        res.status(200).json(user)
    } catch (e) {
        console.log(e);
    }
});

router.get('/:id',async (req:Request, res:Response) => {
    try {
       const user = await Users.findById(req.params.id);
       res.status(200).json(user);
    } catch (e) {
        console.log(e);     
    }
});

router.post('/',async (req:Request, res:Response) => {
    try {
        const user = await Users.create(req.body);
        console.log(user.id);
        const createCart = new Cart({user:user.id})
        await createCart.save()
        res.status(201).json(user)
    } catch (e) {
        console.log(e);
    }
});

router.put('/',async (req:Request, res:Response) => {
    try {
        const user = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).json(user);
    } catch (e) {
        console.log(e);
    }
});

router.delete('/:id',async (req:Request, res:Response) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id)
        res.status(204).json(user)
    } catch (e) {
        console.log(e);
    }
});


export default router