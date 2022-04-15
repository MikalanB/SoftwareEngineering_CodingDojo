const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/job_board", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("You have successfully established a connection"))
    .catch(err => console.log("Unable to establish a connection"))
