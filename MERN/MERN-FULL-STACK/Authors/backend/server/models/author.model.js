const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: [true, "You need to provide a name."],
        minLength: [3, "Author name needs to be atleast 3 characters"]
    },
}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema)
module.exports = Author;