const User = require('../models/user.model');

module.exports.findAll = (req, res) => {
    User.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(results => res.json({msg: "success", user: results}))
        .catch(err => res.status(400).json({ message: "Unable to create product in database."})) 
} 

module.exports.findOne = (req, res) => {
    User.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}
module.exports.deleteOne = (req, res) => {
    User.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.updateOne = (req, res) => {
    User.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}