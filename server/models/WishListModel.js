const mongoose = require("mongoose");
const wishListSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
    },
    finalPrice: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },

}, { timestamps: true });
const model = mongoose.model("Wishlist", wishListSchema);

module.exports = model;