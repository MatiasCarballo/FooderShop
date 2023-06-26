import { Router } from "express";
import User from './Users';
import Product from './Products';
import Cart from './Cart'
const router = Router();

router.use('/user', User);
router.use('/product', Product);
router.use('/cart', Cart);

export default router;