// server set up server.js

const express = require('express');
const morgan = require('morgan');
const app = express();

const animalRouter = require('./routes/animals');

const PORT = 9000;

// middleware
app.use(express.json());
// morgan as a logger
app.use(morgan('dev'));

//routes
app.use('/animals', animalRouter);

//server listener
app.listen(PORT, () => {
    console.log(`app started on port: ${PORT}`)
})