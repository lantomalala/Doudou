const express = require('express');
const app = express();
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const url = process.env.DB_URL

app.use(bodyParser.json());
//connect DB
mongoose.connect(url);


// page d'accuel
app.get('/', (req, res) => {
    res.send("hello word");
});
app.listen(8080);

//router import
//pp.use('/posts', postsRoute );