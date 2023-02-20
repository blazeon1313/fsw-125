// server set up server.js

const express = require('express');
const morgan = require('morgan');
const app = express();
const {v4: uuidv4} = ('uuid');

const recycledRouter = require('./routes/itemsIntake4');

const Port = 3000;

// middleware
app.use(express.json());
// middleware used as a logger
app.use(morgan('dev'));

app.use('/recycledItems', recycledRouter);

//server startup logic
app.listen(Port, () => {
    console.log(`app started on port: ${Port}`)
})
