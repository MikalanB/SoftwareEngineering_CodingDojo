const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.get("/api/users/all", UserController.findAll);
    app.post("/api/users/create", UserController.createUser)
    app.get("/api/users/:_id", UserController.findOne)
    app.delete("/api/users/:_id", UserController.deleteOne)
    app.put("/api/users/:_id", UserController.updateOne)
}