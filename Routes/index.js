import { Router } from "express";
import authRoutes from './Auth.routes.js';

const router = Router();


router.use("/auth", authRoutes)
// router.use("/product", productRoutes)

export default router;