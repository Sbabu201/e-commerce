const productModel = require("../models/productModel")

exports.addProductController = async (req, res) => {
    try {
        const formData = req.body;
        console.log('req.body', req.body)
        if (!formData.name || !formData.image1 || !formData.description || !formData.catagory || !formData.brand || !formData.price) {
            return res.status(400).send({
                message: "enter valid document",
                success: false
            })
        }


        const product = new productModel({ name: formData.name, description: formData.description, catagory: formData.catagory, brand: formData.brand, price: formData.price, discount: formData.discount, image1: formData.image1, size: formData.size, color: formData.color });
        await product.save();
        console.log('product', product)
        return res.status(201).send({
            message: "product created successfully",
            success: true,
            product
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: "registratiion  failed",
            success: false,
            error

        })
    }
}
exports.getProductByIdController = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productModel.findById({ productId });
        console.log(product)
        if (!product) {
            return res.status(200).json({
                success: true,
                message: "no product is there "
            });
        }
        return res.status(200).json({
            success: true,
            message: "product got  successfully",
            product
        });

    } catch (error) {
        console.log('error', error)
        return res.status(400).send({
            message: "failed to get product",
            success: false,
            error

        })
    }
}
exports.getAllProductController = async (req, res) => {
    try {
        const products = await productModel.find(req.query);
        console.log('products', products)
        if (products.length === 0) {
            return res.status(200).json({
                success: true,
                message: "no product is there "
            });
        }
        return res.status(200).json({
            success: true,
            message: "products got  successfully",
            products
        });

    } catch (error) {
        console.log('error', error)
        return res.status(400).send({
            message: "failed to get product",
            success: false,
            error

        })

    }
}