const Author = require('../models/author.model');

module.exports.findAll = (req, res) => {
    Author.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "Cannot find any authors!", err
        }))
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Unable to create author in database.", err})) 
}

module.exports.findOne = (req, res) => {
    Author.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "Cannot find this author", err
        }))
}
module.exports.deleteOne = (req, res) => {
    Author.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.updateOne = (req, res) => {
    Author.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}