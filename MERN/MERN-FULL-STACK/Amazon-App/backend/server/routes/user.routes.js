const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get("/api/users/all", authenticate, UserController.findAll);
    app.post("/api/users/create", UserController.createUser)
    app.get("/api/users/:_id", UserController.findOne)
    app.delete("/api/users/:_id", UserController.deleteOne)
    app.put("/api/users/:_id", UserController.updateOne)
    app.post("/api/users/login", UserController.login)
}