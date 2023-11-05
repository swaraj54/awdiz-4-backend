import { Router } from "express";
import { addProduct, getAllProducts, filterProducts, getSingleProduct } from "../Controllers/Products.contollers.js";
import { checkUserId } from "../Middlewares/AllMiddlewares.js";

const router = Router();

//api
router.post('/filter-products' , filterProducts)
router.post('/add-product', checkUserId, addProduct)
router.get('/get-all-product', getAllProducts)
router.post('/get-single-product', getSingleProduct)


export default router;
