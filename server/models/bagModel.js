const mongoose = require("mongoose");
const bagSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
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
    finalPrice: {
        type: String,
        required: true
    },

}, { timestamps: true });
const model = mongoose.model("Bag", bagSchema);

module.exports = model;