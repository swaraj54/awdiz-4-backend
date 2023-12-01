import ProductModal from "../Modals/Product.modal.js";
import UserModal from "../Modals/User.modal.js";

export const addCart = async (req, res) => {
    try {
        const { productId, userId } = req.body;
        if (!productId || !userId) return res.status(404).json({ success: false, message: "User and Product are mandatory.." })
        await UserModal.findByIdAndUpdate(userId, { $push: { cart: productId } })
        return res.status(201).json({ success: true, message: "Product added to cart successfully." })
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}


export const Cart = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) return res.status(404).json({ success: false, message: "User is mandatory.." })
        const user = await UserModal.findById(id)
        if (!user) return res.status(404).json({ success: false, message: "User not found.." })
        console.log(user.cart, "cart")
        if (user) {
            var userCart = []
            for (var i = 0; i < user.cart.length; i++) {
                console.log(user.cart[i], "user.cart[i]")
                const productData = await ProductModal.findById(user.cart[i])
                userCart.push(productData)
            }
            console.log(userCart, "userCart")
            return res.status(201).json({ success: true, message: "Products fetched successfully.", products: userCart })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}
// getCart

export const deleteCart = async (req, res) => {
    try {
        const { productId, userId } = req.body;
        if (!productId || !userId) return res.status(404).json({ success: false, message: "User and Product are mandatory.." })

        const user = await UserModal.findById(userId)
        if (!user) return res.status(404).json({ success: false, message: "User not found.." })
        
        const index = user.cart.indexOf(productId);
        user.cart.splice(index, 1)
        await user.save();

        var userCart = []
        for (var i = 0; i < user.cart.length; i++) {
            const productData = await ProductModal.findById(user.cart[i])
            userCart.push(productData)
        }
        return res.status(201).json({ success: true, message: "Product deleted successfully.", products: userCart })

    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}



// find all id's of products from user modal, then use those id's to find products data from productModal