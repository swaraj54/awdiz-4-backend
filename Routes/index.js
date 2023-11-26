import { Router } from "express";
import authRoutes from './Auth.routes.js';
import productRoutes from './Product.routes.js';
import userRoutes from './User.routes.js';

const router = Router();


// axios.post('/api/v1/cart/addToCart', { productId, userId })

router.use("/auth", authRoutes)
router.use("/product", productRoutes)
router.use("/user", userRoutes)
// router.use("/cart", productRoutes)
// router.use("/product", productRoutes)
// router.use("/product", productRoutes)
// router.use("/product", productRoutes)
// router.use("/product", productRoutes)

export default router;