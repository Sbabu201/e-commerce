const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
        // required: true
    },
    altContactNumber: {
        type: String,

    },

}, { timestamps: true });
const model = mongoose.model("Address", addressSchema);

module.exports = model;