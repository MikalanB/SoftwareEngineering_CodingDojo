const mongoose = require('mongoose');

const SundaeSchema = new mongoose.Schema({
    flavor: {
        type: String,
        required: [true, "You need to have a flavor"],
        minLength: [4, "You need to have at least 4 characters for flavor"],
        validate: {
            validator: (input) => {
                return !input.toUpperCase().includes('VANILLA');
            },
            message: "death to vanilla!"
        }
    }, 
    numScoops: {
        type: Number,
        required: [true, "You need some scoops!"],
        maxLength: [10, "woah slow down, it nah run weh"]
    },
    whipped: {
        type: Boolean,
        required: [true, "You need to let us know if you want whipped cream or not "]
    },
    name: {
        type: String,
        required: [true, "You need to have a name"],
        minLength: [4, "make a longer name than 4 characters"]
    },
    toppings: [String],
    
}, {timestamps: true})

const Sundae = mongoose.model("Sundae", SundaeSchema)
module.exports = Sundae;

