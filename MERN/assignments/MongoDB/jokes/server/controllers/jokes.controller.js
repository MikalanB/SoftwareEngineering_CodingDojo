const Jokes = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json({allJokes}))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.findOneJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({oneJoke}))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.randomJoke = (req, res) => {
    Jokes.findOne()
        .then(oneJoke => res.json({oneJoke}))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
        .then(createdJoke => res.json({ joke: createdJoke}))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true })
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message: "that didn't work!", err
    }))
}

module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({_id: req.params.id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}