const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
    },
    address: {
        type: mongoose.Types.ObjectId,
        ref: "Address",
    },
    finalPrice: {
        type: String,
        default: ""
    },
    size: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        default: "ordered"
    },

}, { timestamps: true });
const model = mongoose.model("Order", orderSchema);

module.exports = model;