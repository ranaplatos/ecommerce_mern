const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product Name is mandatory!"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Product Description is mandatory!"]
    },
    price: {
        type: Number,
        required: [true, "Price of Product is mandatory!"],
        maxLength: [8, "Price of product cannot exceed 8 characters!"]
    },
    ratings: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Product category is mandatory!"]
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    stock: {
        type: Number,
        required: true,
        maxLength: [4, "Product stock cannot be greater than 4 characters!"],
        default: 1
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Product",productSchema)