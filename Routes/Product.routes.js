import { Router } from "express";
import { addProduct, getAllProducts } from "../Controllers/Products.contollers.js";
import { checkUserId } from "../Middlewares/AllMiddlewares.js";

const router = Router();

//api

router.post('/add-product', checkUserId, addProduct)
router.post('/get-all-product', checkUserId, getAllProducts)


export default router;
