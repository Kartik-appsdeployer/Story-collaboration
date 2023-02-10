const express = require('express');
const app = express();
const dbconnect = require('./dpSetup/db');
const cors = require('cors')
var bodyParser = require("body-parser");


dbconnect();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

const Routes = require('./routes/Routes');
app.use('/routes', Routes);

app.listen(3001, () => {
    console.log("Story Collaboration Listening on post 3001")
})