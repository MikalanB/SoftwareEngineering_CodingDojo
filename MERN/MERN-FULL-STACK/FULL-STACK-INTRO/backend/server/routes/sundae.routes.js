//import controller
const SundaeController = require('../controllers/sundae.controller')

module.exports = app => {
    app.get("/api/test", SundaeController.testResponse);
    app.get("/api/sundae/findAll", SundaeController.findAll);
    app.post("/api/sundae/create", SundaeController.createSundae);
    app.get("/api/sundae/:_id", SundaeController.findOne)
    app.delete("/api/sundae/:_id", SundaeController.deleteOne)
    app.patch("/api/sundaes/:_id", SundaeController.updateOne)
    app.put("/api/sundaes/:_id/addTopping", SundaeController.addTopping)
}  