import { Router } from "express";
import { Login, Register } from './../Controllers/Auth.controllers.js'

const router = Router();

//api

router.post("/login", Login)
router.post("/register", Register)

export default router;



