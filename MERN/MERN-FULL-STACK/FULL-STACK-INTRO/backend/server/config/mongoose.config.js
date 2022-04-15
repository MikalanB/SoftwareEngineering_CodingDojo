const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/sundaes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("yo you're connected"))
    .catch(err => console.log("this is not working"))
