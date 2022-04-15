const Pirate = require('../models/pirate.model');

module.exports.findAll = (req, res) => {
    Pirate.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "Cannot find any pirates in the crew!", err
        }))
}

module.exports.create = (req, res) => {
    Pirate.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Unable to create a pirate in database.", err})) 
}

module.exports.findOne = (req, res) => {
    Pirate.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "Cannot find this pirate", err
        }))
}
module.exports.deleteOne = (req, res) => {
    Pirate.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.updateOne = (req, res) => {
    Pirate.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}