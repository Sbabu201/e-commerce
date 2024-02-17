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

    address: {
        street: {
            type: String,
            default: ""
        },
        city: {
            type: String,
            default: ""
        },
        state: {
            type: String,
            default: ""
        },
        postalCode: {
            type: String,
            default: ""
        },
        country: {
            type: String,
            default: ""
        },
        contactNumber: {
            type: String,
            default: ""
            // required: true
        },
        altContactNumber: {
            type: String,

        },
    }

}, { timestamps: true });
const model = mongoose.model("User", userSchema);

module.exports = model;