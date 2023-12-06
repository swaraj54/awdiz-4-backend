import { Router } from "express";
import { Cart, addCart, deleteCart } from "../Controllers/User.controllers.js";
import axios from "axios";

const router = Router();

router.post('/add-cart', addCart)
router.post('/cart', Cart)
router.post('/delete-cart', deleteCart)
router.get('/test', async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        // console.log(response.data)

        // payment gateway
        // kyc 
        // chatbot 

        // microservices - small servers

        return res.status(200).json({ success: true, products: response.data })

    } catch (error) {
        console.log(error, "error")
        return res.status(500).json({ success: false, message: error })
    }
})


export default router;
