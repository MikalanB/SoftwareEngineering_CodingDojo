const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());

require('./server/config/mongoose.config');

// accept post resquests
app.use(express.json(), express.urlencoded({extended: true,}))

require("./server/routes/product.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));