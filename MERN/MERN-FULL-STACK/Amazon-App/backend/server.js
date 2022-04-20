const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const jwt = require("jsonwebtoken");
require('dotenv').config();
//const myFirstSecret = process.env.FIRST_SECRET_KEY;
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(cookieParser());

require('./server/config/mongoose.config');

// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


// accept post resquests
app.use(express.json(), express.urlencoded({extended: true,}))

require("./server/routes/product.routes")(app);
require("./server/routes/user.routes")(app);
require("./server/routes/order.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));