const Product = require('../models/product.model');

module.exports.findAll = (req, res) => {
    Product.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message: "that didn't work!", err
        }))
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({ message: "Unable to create product in database."})) 
}