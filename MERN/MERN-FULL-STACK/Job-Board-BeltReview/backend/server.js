const express = require('express');
const app = express();
const port = 8000;
// needed so that frontend talks to your backendcd
const cors = require('cors');
app.use(cors());

require('./server/config/mongoose.config');

// accept post resquests
app.use(express.json(), express.urlencoded({extended: true,}))

require("./server/routes/job.routes")(app);


app.listen(port, ()=> console.log(`running on ${port} is a new way`))