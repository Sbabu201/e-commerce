const wishListModel = require("../models/WishListModel")

exports.addWishListController = async (req, res) => {
    try {

        const { user, product, finalPrice, quantity, color, size } = req.body;
        if (!product || !finalPrice || !quantity || !color || !size) {
            return res.status(400).send({
                message: "enter valid document",
                success: false
            })
        }
        const existingItem = await wishListModel.findOne({ product, user });

        if (existingItem) {
            return res.status(200).send({
                message: "item is already in wishlist ",
                success: false
            })
        }

        const newWishList = new wishListModel({ user, product, finalPrice, quantity, color, size });
        await newWishList.save();


        const wishlistitems = await wishListModel.findById(newWishList._id).populate("product");
        console.log(wishlistitems)
        return res.status(200).json({
            success: true,
            message: "Added to Wishlist successfully",
            wishlistitems
        });

    } catch (error) {
        console.log('error', error)
        return res.status(400).send({
            message: "failed to make the item wishlisted",
            success: false,
            error

        })
    }
}
exports.getAllWishListController = async (req, res) => {
    try {
        const userid = req.params.id;
        // console.log('first', userid)
        const allWishList = await wishListModel.find({ user: userid }).populate("product");
        // console.log('allWishList', allWishList);
        if (allWishList.length === 0) {
            return res.status(200).json({
                success: false,
                message: "no item in the wishlist"
            });
        }
        return res.status(200).json({
            success: true,
            message: "successfully got all the wishlist",
            allWishList
        });

    } catch (error) {
        console.log('error', error)
        return res.status(400).send({
            message: "failed to get all wishlist items ",
            success: false,
            error

        })
    }


}
exports.deleteWishListByIdController = async (req, res) => {
    try {
        const wishlistId = req.params.id;
        console.log('first', wishlistId)
        const deleteWishlist = await wishListModel.findByIdAndDelete({ _id: wishlistId }, { new: true });
        console.log('deleteWishList', deleteWishlist)
        if (deleteWishlist) {
            return res.status(200).json({
                success: true,
                message: "removed from  Wishlist successfully",
                deleteWishlist
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
