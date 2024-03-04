const mongoose = require("mongoose");
const ratingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
    },
    ratingValue: {
        type: Number,
        default: 0
    },
    comment: {
        type: String
    }

}, { timestamps: true });
const model = mongoose.model("Rating", ratingSchema);

module.exports = model;