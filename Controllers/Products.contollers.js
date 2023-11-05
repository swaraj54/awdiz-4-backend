import ProductModal from './../Modals/Product.modal.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModal.find({}).limit(10).select("-createdAt -updatedAt -__v ");
        if (products.length) {
            return res.status(200).json({ success: true, message: "Products found.", products: products })
        }
        return res.status(404).json({ success: false, message: "Products Not found." })
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}

export const getSingleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        if (!productId) return res.status(404).json({ message: 'Product id is required.', success: false })

        const product = await ProductModal.findById(productId).select("-createdAt -updatedAt -__v ")
        if (product) {
            return res.status(200).json({ success: true, message: "Product found.", product: product })
        }
        return res.status(404).json({ success: false, message: "Product not found." })
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}

export const addProduct = async (req, res) => {
    try {
        const { name, price, category, image, id } = req.body;
        if (!name || !price || !category || !image) return res.status(404).json({ success: false, message: "All fields are required." })
        const product = new ProductModal({
            name, price, category, image: image, userId: id
        })
        // console.log(product, "- product here")
        const ress = await product.save();
        // console.log(ress, "response from mongodb")
        return res.status(201).json({ success: true, message: "Product successfully added." })
    } catch (error) {
        console.log(error, "error here")
        return res.status(500).json({ success: false, message: error })
    }
}

// filter 
// sorting asc dec 
// pagination 

// 20 

// 10 2
// 10 , 10


export const filterProducts = async (req, res) => {
    try {
        const { skip, page = 10, query, sorting } = req.body;

        const updatedQuery = { category: query }

        const name = sorting.replace(/^-/, "");

        const order = sorting[0] == "-" ? "-" : "";

        const updatedSorting = { [name]: `${order}1` }

        // console.log(updatedSorting)

        const products = await ProductModal.find(updatedQuery).skip(skip * 10).limit(page).sort(updatedSorting)

        return res.status(200).json({ message: "Products found", products })


    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}