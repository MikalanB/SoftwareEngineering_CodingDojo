const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Set up is required"],
        minlength: [10, "Set up has to be a minimum of 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "A punchline is required"],
        minlength: [3, "A punchline has to be a minimum of at least 3 characters"]
    }
})

const Jokes = mongoose.model('Jokes', JokesSchema);

module.exports = Jokes;