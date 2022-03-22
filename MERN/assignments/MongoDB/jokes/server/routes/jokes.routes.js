const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
    // route to get all jokes
    app.get('/api/jokes', JokesController.findAllJokes);
    // route to get one Joke
    app.get('/api/jokes/:id', JokesController.findOneJoke);
    //return a random joke
    app.get('/api/jokes/random', JokesController.randomJoke);
    //create a new joke
    app.post('/api/jokes/new', JokesController.createJoke);
    // update joke
    app.put('/api/jokes/update/:id', JokesController.updateJoke);
    // delete joke
    app.delete('/api/jokes/delete/:id', JokesController.deleteJoke);
}