const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get("/api/authors/all", AuthorController.findAll);
    app.post("/api/authors/create", AuthorController.createAuthor)
    app.get("/api/authors/:_id", AuthorController.findOne)
    app.delete("/api/authors/:_id", AuthorController.deleteOne)
    app.put("/api/authors/:_id", AuthorController.updateOne)
}
