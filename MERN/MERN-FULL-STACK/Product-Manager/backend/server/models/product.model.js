const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:  {
        type: String,
        required: [true, "You need to provide a title."],
        minLength: [3, "Title need to be atleast 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "You have to provide a price of the product."],
        minLength: [1, "Price need to be more than $1"]
    },
    description: {
        type: String,
        required: [true, "You need to provide a description"],
        minLength: [10, "Description need to be at least 10 characters long"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;