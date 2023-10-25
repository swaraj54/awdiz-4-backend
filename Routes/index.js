import { Router } from "express";
import authRoutes from './Auth.routes.js';

const router = Router();


// axios.post('/api/v1/cart/addToCart', { productId, userId })

router.use("/auth", authRoutes)
// router.use("/product", productRoutes)
// router.use("/user", productRoutes)
// router.use("/cart", productRoutes)
// router.use("/product", productRoutes)
// router.use("/product", productRoutes)
// router.use("/product", productRoutes)
// router.use("/product", productRoutes)

export default router;