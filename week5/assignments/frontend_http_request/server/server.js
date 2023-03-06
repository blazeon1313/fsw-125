// server set up server.js

const express = require('express');
const morgan = require('morgan');
const app = express();

const recycledRouter = require('./routes/itemsIntake');

const PORT = 9000;

// middleware
app.use(express.json());
// middleware used as a logger
app.use(morgan('dev'));

app.use('/routes/recycledItems', recycledRouter);

//server startup logic
app.listen(PORT, () => {
    console.log(`app started on port: ${PORT}`)
})