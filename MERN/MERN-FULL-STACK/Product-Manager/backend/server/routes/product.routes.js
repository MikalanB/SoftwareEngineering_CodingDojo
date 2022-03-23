const Product = require('../controllers/product.controller');

module.exports = app => {
    app.get("/api/products/all", Product.findAll);
    app.post("/api/products/create", Product.createProduct)

}
