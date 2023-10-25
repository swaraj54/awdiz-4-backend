import { Router } from "express";
import { Login, Register } from './../Controllers/Auth.controllers.js'

const router = Router();

//api

router.get("/login", Login)
router.post("/register", Register)

export default router;



