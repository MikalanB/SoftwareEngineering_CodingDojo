const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: [true, "A User ID has to be provided to tie the order information to."]
    },

    order_date: {
        type: Date,
        default: Date.now()
    },

    items_ordered: {
        type: Array,
    },

    deliveryAddress: {
        type: Array,
        required: [true, "A Delivery Address has to be provided."]
    },

    bill: {
        type: Number,
        required: [true, "A billind amount needs to be provided."],
        default: 0
    }
})

const Order = mongoose.model("Order", OrderSchema)
module.exports = Order;