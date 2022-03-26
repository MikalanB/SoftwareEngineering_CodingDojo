const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    playerName:  {
        type: String,
        required: [true, "You need to provide a name."],
        minLength: [2, "Player name needs to be atleast 3 characters"]
    },

    position: {
        type: String,
        default: "Unassigned"
    },

    playerStatus: { 
        type: String,
        default: "Undecided",
        minLength: [2, "Player status needs to be longer"]
    },

    GameSeries: {
        type: Number,
    }

}, {timestamps: true})

const Team = mongoose.model("Team", TeamSchema)
module.exports = Team;