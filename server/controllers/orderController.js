const orderModel = require("../models/orderModel")

exports.getordersByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log('req.params', id)

        const existOrder = await orderModel.find({ user: id }).populate("product").populate("address").populate("user");
        if (!existOrder) {
            return res.status(400).send({
                message: "no order  exist ",
                success: false
            })
        }
        return res.status(201).send({
            message: "orders got successfully ",
            success: true,
            existOrder
        })

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: "orders failed to get",
            success: false,
            error

        })
    }
}
exports.addOrderController = async (req, res) => {
    try {
        const { user, product, finalPrice, address, size } = req.body;
        // console.log('profilePhoto', profilePhoto)
        if (!user || !product || !address || !finalPrice || !size) {
            return res.status(400).send({
                message: "enter valid document",
                success: false
            })
        }

        const order = new orderModel({ user, product, finalPrice, address, size });
        await order.save();
        return res.status(201).send({
            message: "order successful",
            success: true,
            order
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            message: "order  failed",
            success: false,
            error

        })
    }
}