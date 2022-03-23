const express = require('express');
const app = express();
const mongoose = require('./database/mongoose')

const List = require('./database/models/list');
const Task = require('./database/models/task');

/*
CORS - Cross Origin Request Security.
localhost:3000 - backend api
localhost:4200 - frontend
*/

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * List: Create, Update, ReadOne, ReadAll, Delete
 * Task: Create, Update, ReadOne, ReadAll, Delete
 */



app.use(express.json());
app.listen(3000, () => {
    console.log('Server connected on 3000')
});