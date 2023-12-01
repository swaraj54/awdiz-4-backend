import { Router } from "express";
import { Cart, addCart, deleteCart } from "../Controllers/User.controllers.js";

const router = Router();

router.post('/add-cart', addCart)
router.post('/cart', Cart)
router.post('/delete-cart', deleteCart)


export default router;
