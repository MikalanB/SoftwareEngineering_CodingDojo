const TeamController = require('../controllers/team.controller');

module.exports = app => {
    app.get("/api/teams/all", TeamController.findAll);
    app.post("/api/teams/create", TeamController.create)
    app.get("/api/teams/:_id", TeamController.findOne)
    app.delete("/api/teams/:_id", TeamController.deleteOne)
    app.put("/api/teams/:_id", TeamController.updateOne)
}
