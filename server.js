const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const db = require('./config/key').mongoURI
const addRoute= require('./routes/addRoute.js')
const getRoute = require('./routes/getRoute.js')
const deleteRoute = require('./routes/deleteRoute.js')
const updateRoute = require('./routes/updateRoute.js')


app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

mongoose.connect(db)
    .then(() => console.log('MongoDb connected'))
    .catch(err => console.log(err))

mongoose.set('debug', true)

app.use(getRoute)
app.use(addRoute)
app.use(updateRoute)
app.use(deleteRoute)

app.listen(port, () => console.log(`Listening on port ${port}`));
