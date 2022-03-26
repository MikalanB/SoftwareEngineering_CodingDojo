const Team = require('../models/team.model');

module.exports.findAll = (req, res) => {
    Team.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "Cannot find any players on the team!", err
        }))
}

module.exports.create = (req, res) => {
    Team.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Unable to create player in database."})) 
}

module.exports.findOne = (req, res) => {
    Team.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "Cannot find this player", err
        }))
}
module.exports.deleteOne = (req, res) => {
    Team.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.updateOne = (req, res) => {
    Team.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}