// Server JS file
const express = require('express');
const morgan = require('morgan');
const app = express();
//const {v4: uuidv4} = ('uuid');
const port = 3000;

const todoRouter = require('./routes/todo');
const movieRouter = require('./routes/movies')

// middleware
app.use(express.json());
//logger
app.use(morgan('dev'));

// middleware for the endpoints
app.use('/todo', todoRouter);
app.use('/movies', movieRouter);

//server startup logic
app.listen(port, () => {
    console.log(`app started on port: ${port}`)
})