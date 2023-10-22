import { Router } from "express";
import { Login } from './../Controllers/Auth.controllers.js'

const router = Router();

//api

router.get("/login", Login)

export default router;
