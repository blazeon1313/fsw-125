// server set up for express server.js

const express = require('express');
const morgan = require('morgan');
const app = express();

const movieRouter = require('./routes/movies');

const PORT = 9000;

// middleware
app.use(express.json());
// middleware used as a logger
app.use(morgan('dev'));

app.use('/movies', movieRouter);

//server listener
app.listen(PORT, () => {
    console.log(`app started on port: ${PORT}`)
})