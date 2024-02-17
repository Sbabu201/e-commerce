const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image1: [{
        type: String,
        default: ""
    }]

    ,
    gender: {
        type: String,
        default: "men"
    }
    ,
    featured: {
        type: Boolean,
        default: false
    }
    ,
    catagory: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        default: 1
    },
    totalRatings: {
        type: Number,
        default: 0
    },
    avgRatings: {
        type: Number,
        default: 0
    },
    color: [
        {
            type: String
        }
    ],
    size: [
        {
            type: String
        }
    ],
    wishlist: {
        type: mongoose.Types.ObjectId,
        ref: "Wishlist",
    },



}, { timestamps: true });
const model = mongoose.model("Product", productSchema);

module.exports = model;