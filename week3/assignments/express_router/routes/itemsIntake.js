//recycled Items Route
const express = require('express');
const recycledRouter = express.Router();

// require uuid for _id
const { v4: uuidv4 } = require('uuid');

// data

let recycledItems = [
    {name: 'paper', description: 'newspaper', recylable: "yes", quantity: 5, pricePerUnit: 1.00, _id: uuidv4()},
    {name: 'glass', description: 'mason jar', recyclable: "yes", quantity: 3, pricePerUnit: 0.50, _id: uuidv4()},
    {name: 'paper', description: 'cardboard', recylable: "yes", quantity: 25, pricePerUnit: 0.05, _id: uuidv4()},
    {name: 'glass', description: 'dishes', recyclable: "yes", quantity: 12, pricePerUnit: 0.75, _id: uuidv4()}
];

// routes
//endpoint: http://localhost:3000/recycledItems
recycledRouter
    .get('/', (req, res) => {
        res.send(recycledItems)
    })

    .post('/', (req, res) => {
        const newItem = req.body;
        newItem._id = uuidv4();
        recycledItems.push(newItem);

        console.log(recycledItems)// to show the newItem added to the list
        res.send(`Adding ${newItem.name} to the data base was successful`);
    })

module.exports = recycledRouter;