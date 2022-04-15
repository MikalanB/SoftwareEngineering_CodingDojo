const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: [true, "You need to provide a name."],
        minLength: [2, "Pirate name needs to be atleast 2 characters"]
    },

    imgURL: {
        type: String,
        required: [true, "You need to provide an image!"]
    },

    crewPosition: { 
        type: String,
        minLength: [2, "Crew position name needs to be longer"]
    },

    numberOfTreasureChests: {
        type: Number,
        required: [true, "You need to provide a number of Treasure chests"]

    }, 

    pirateCatchPhrase: {
        type: String,
        required: [true, "You need to provide a Pirate Catch Phrase!"],
    },

    pegLeg: {
        type: Boolean,
        default: true
    },

    eyePatch: {
        type: Boolean,
        default: true
    },

    hookHand: {
        type: Boolean,
        default: true
    },

}, {timestamps: true})

const Pirate = mongoose.model("Pirate", PirateSchema)
module.exports = Pirate;