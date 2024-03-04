const productModel = require("../models/productModel")
const ratingsModel = require("../models/ratingsModel")
// rating controller 
exports.addRatingController = async (req, res) => {
    try {
        const { user, product, comment, ratingValue } = req.body;
        // console.log('req.body', req.body)
        if (!user || !product || !ratingValue) {
            return res.status(400).send({
                message: "enter valid document",
                success: false
            })
        }


        const rating = await ratingsModel.findOne({ user, product });
        console.log('rating', rating)
        if (rating) {
            return res.status(200).send({
                message: "rating has been given already ",
                success: false
            })
        }
        const newRating = new ratingsModel({ user, product, comment, ratingValue });
        await newRating.save();
        // console.log('newRating', newRating)
        return res.status(201).send({
            message: "Rating added  successfully",
            success: true,
            newRating
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: "Rating failed to add",
            success: false,
            error

        })
    }
}
exports.addProductController = async (req, res) => {
    try {
        const { name, description, category, brand, colors, discount, featured, gender, image1, price } = req.body;

        // console.log('req.body', req.body)
        if (!name || !description || !category || !brand || !gender) {
            return res.status(400).send({
                message: "enter valid document",
                success: false
            })
        }


        const product = new productModel({ name, description, category, brand, colors, discount, featured, gender, image1, price });
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
exports.getAllRatingController = async (req, res) => {
    try {

        const ratings = await ratingsModel.find();
        console.log('ratings', ratings)
        if (ratings.length === 0) {
            return res.status(200).json({
                success: true,
                message: "no ratings is there "
            });
        }
        return res.status(200).json({
            success: true,
            message: "ratings got  successfully",
            ratings
        });

    } catch (error) {
        console.log('error', error)
        return res.status(400).send({
            message: "failed to get ratings",
            success: false,
            error

        })

    }
}
exports.getAllProductController = async (req, res) => {
    try {
        const products = await productModel.find();
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
exports.editRatingByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        const { ratingValue } = req.body;
        console.log('id', id)
        console.log('req.body', req.body)
        // Update the rating by ID
        const editRating = await ratingsModel.findOneAndUpdate({ product: id }, { ratingValue: ratingValue }, { new: true });
        console.log('editRating', editRating)
        if (!editRating) {
            return res.status(404).json({
                success: false,
                message: "Rating not found or not edited"
            });
        }

        // Fetch all ratings after the edit
        const ratings = await ratingsModel.find();

        return res.status(200).json({
            success: true,
            message: "Rating edited successfully",
            ratings
        });
    } catch (error) {
        console.error('Error editing rating:', error);
        return res.status(500).json({
            success: false,
            message: "Failed to edit rating",
            error: error.message
        });
    }
};
