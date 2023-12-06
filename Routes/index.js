import { Router } from "express";
import authRoutes from './Auth.routes.js';
import productRoutes from './Product.routes.js';
import userRoutes from './User.routes.js';

const router = Router();


// axios.post('/api/v1/cart/addToCart', { productId, userId })

router.use("/auth", authRoutes) // 8000 - backend-auth
router.use("/product", productRoutes)  // 8001 backend-product
router.use("/user", userRoutes) // // 8002 backend-user
// router.use("/cart", productRoutes)
// router.use("/product", productRoutes)
// router.use("/product", productRoutes)
// router.use("/product", productRoutes)
// router.use("/product", productRoutes)

export default router;




// Lets say there are 5 products remanining in data, but 1000 of 
// users are buying it, requesting for it, 

// load balancer

// 1. microservice - convert server into multiple servers

// 2. mulitple servers - multiple servers * 10

// 3. nginx - load balancer - aws 

// 4. healthy and unhealthy, - nginx - configure