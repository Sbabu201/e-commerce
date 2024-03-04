const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,
        required: true
    },
    // address: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Address",
    // },

}, { timestamps: true });
const model = mongoose.model("User", userSchema);

module.exports = model;