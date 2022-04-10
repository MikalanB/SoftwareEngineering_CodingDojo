const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
//const jwt = require("jsonwebtoken");
//require('dotenv').config();
// const cookieParser = require('cookie-parser');

app.use(cors());

require('./server/config/mongoose.config');

// const payload = {
//     id: user._id
// };

// notice that we're using the SECRET_KEY from our .env file
//const userToken = jwt.sign(payload, process.env.SECRET_KEY);


//app.use(cookieParser());
// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


// accept post resquests
app.use(express.json(), express.urlencoded({extended: true,}))

require("./server/routes/product.routes")(app);
require("./server/routes/user.routes")(app);
require("./server/routes/order.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));