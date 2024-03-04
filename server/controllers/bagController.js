const bagModel = require("../models/bagModel")

exports.addToBagByIdController = async (req, res) => {
    try {

        const { user, product, quantity, finalPrice, color, size } = req.body;
        if (!user || !quantity || !product || !finalPrice || !color || !size) {
            return res.status(400).send({
                message: "enter valid document",
                success: false
            })
        }
        const checkitems = await bagModel.findOne({ product, user });
        if (checkitems) {
            return res.status(200).send({
                message: "item is already in bag ",
                success: false
            })
        }

        const bagitem = new bagModel({ user, product, quantity, finalPrice, color, size });
        await bagitem.save();


        const bagitems = await bagModel.findById(bagitem._id).populate("product");
        // console.log(bagitems)
        return res.status(200).json({
            success: true,
            message: "Added to bag successfully",
            bagitems
        });

    } catch (error) {
        console.log('error', error)
        return res.status(400).send({
            message: "failed to add the item to bag",
            success: false,
            error

        })
    }
}
exports.getAllBagItemController = async (req, res) => {
    try {
        const userid = req.params.id;
        console.log('first', userid)
        const allBagItems = await bagModel.find({ user: userid }).populate("product");
        console.log('allBagItems', allBagItems);
        if (allBagItems.length === 0) {
            return res.status(200).json({
                success: true,
                message: "no item in the bag"
            });
        }
        return res.status(200).json({
            success: true,
            message: "successfully got all the bag items",
            allBagItems
        });

    } catch (error) {
        console.log('error', error)
        return res.status(400).send({
            message: "failed to get all bag items ",
            success: false,
            error

        })
    }


}
exports.deleteBagItemByIdController = async (req, res) => {
    try {
        const bagId = req.params.id;
        console.log('first', bagId)
        const deleteBag = await bagModel.findByIdAndDelete({ _id: bagId }, { new: true });
        console.log('deleteBag', deleteBag)
        if (deleteBag) {
            return res.status(200).json({
                success: true,
                message: "removed from  bag successfully",
                deleteBag
            });
        }
        return res.status(400).json({
            success: false,
            message: "failed to remove"
        });

    } catch (error) {
        console.log('error', error)
        return res.status(400).send({
            message: "failed to delete",
            success: false,
            error

        })
    }

}
