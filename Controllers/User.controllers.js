import UserModal from "../Modals/User.modal.js";

export const addCart = async (req, res) => {
    try {
        const { productId, userId } = req.body;
        if (!productId || !userId) return res.status(404).json({ success: false, message: "User and Product are mandatory.." })
        await UserModal.findByIdAndUpdate(userId, { cart: productId })
        return res.status(201).json({ success: true, message: "Product added to cart successfully." })
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}

// getCart 

// find all id's of products from user modal, then use those id's to find products data from productModal