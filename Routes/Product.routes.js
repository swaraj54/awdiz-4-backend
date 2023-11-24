import { Router } from "express";
import { addProduct, getAllProducts, filterProducts, getSingleProduct, yourProducts } from "../Controllers/Products.contollers.js";
import { checkUserId } from "../Middlewares/AllMiddlewares.js";

const router = Router();

//api
router.post('/filter-products' , filterProducts)
router.post('/add-product', checkUserId, addProduct)
router.get('/get-all-product', getAllProducts)
router.post('/get-single-product', getSingleProduct)
router.post('/your-products', yourProducts)


export default router;
