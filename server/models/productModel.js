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
    },
    featured: {
        type: Boolean,
        default: false
    }
    ,
    category: {
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
    colors: {
        red: {
            small: {
                size: {
                    type: String,
                    default: "s"
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
            medium: {
                size: {
                    type: String,
                    default: "m"
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
            large: {
                size: {
                    type: String,
                    default: "l"
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
        },
        blue: {
            small: {
                size: {
                    type: String,
                    default: "s"
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
            medium: {
                size: {
                    type: String,
                    default: "m"
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
            large: {
                size: {
                    type: String,
                    default: "l"
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
        },
        green: {
            small: {
                size: {
                    type: String,
                    default: "s"
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
            medium: {
                size: {
                    type: String,
                    default: "m"
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
            large: {
                size: {
                    type: String,
                    default: "l"
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
        },
        white: {

            small: {
                size: {
                    type: String,
                    default: "s"
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
            medium: {
                size: {
                    type: String,
                    default: "m"
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
            large: {
                size: {
                    type: String,
                    default: "l"
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
        }
    },
    wishlist: {
        type: mongoose.Types.ObjectId,
        ref: "Wishlist",
    },



}, { timestamps: true });
const model = mongoose.model("Product", productSchema);

module.exports = model;