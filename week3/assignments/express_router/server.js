// server set up server.js

const express = require('express');
const app = express();
const {v4: uuidv4} = ('uuid');

const recycledRouter = require('./routes/itemsIntake');

const port = 3000;

// middleware
app.use(express.json());

app.use('/recycledItems', recycledRouter);

//server startup logic
app.listen(port, () => {
    console.log(`app started on port: ${port}`)
})
