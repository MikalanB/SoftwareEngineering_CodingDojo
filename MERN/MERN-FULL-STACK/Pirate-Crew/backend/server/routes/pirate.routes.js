const PirateController = require('../controllers/pirate.controller');

module.exports = app => {
    app.get("/api/pirates/all", PirateController.findAll);
    app.post("/api/pirates/create", PirateController.create)
    app.get("/api/pirates/:_id", PirateController.findOne)
    app.delete("/api/pirates/:_id", PirateController.deleteOne)
    app.put("/api/pirates/:_id", PirateController.updateOne)
}
