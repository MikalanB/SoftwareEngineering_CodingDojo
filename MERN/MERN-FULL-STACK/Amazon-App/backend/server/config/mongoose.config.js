const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Successfully established a connection"))
    .catch(err => console.log("Unable to establish a connection"))

mongoose.connect("mongodb://localhost/orders", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Successfully established a connection"))
.catch(err => console.log("Unable to establish a connection"))

mongoose.connect("mongodb://localhost/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Successfully established a connection"))
.catch(err => console.log("Unable to establish a connection"))