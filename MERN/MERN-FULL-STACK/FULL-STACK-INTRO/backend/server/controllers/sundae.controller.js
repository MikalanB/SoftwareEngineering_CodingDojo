//import model
const Sundae = require('../models/sundae.models');
//const SundarModels = require('../models/sundae.models');

module.exports.testResponse = (req, res) => {
    res.json({message: "test response here!"})
}

module.exports.findAll = (req, res) => {
    Sundae.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.createSundae = (req, res) => {
    //request POST data
    Sundae.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.findOne = (req, res) => {
    Sundae.findOne({_id: req.params.id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}
module.exports.deleteOne = (req, res) => {
    Sundae.deleteOne({_id: req.params.id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.updateOne = (req, res) => {
    Sundae.updateOne({_id: req.params.id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.addTopping = (req, res) => {
    Sundae.updateOne({_id: req.params.id},
        {$push: {toppings: req.body.topping}})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}
