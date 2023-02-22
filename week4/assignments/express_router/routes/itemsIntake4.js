//recycled Items Route
const express = require('express');
const recycledRouter = express.Router();

// require uuid for _id
const { v4: uuidv4 } = require('uuid');

// data

let recycledItems = [
    {name: 'paper', description: 'newspaper', recylable: "yes", quantity: 5, pricePerUnit: 1.00, _id: uuidv4()},
    {name: 'glass', description: 'Mason Jar', recyclable: "yes", quantity: 3, pricePerUnit: 0.50, _id: uuidv4()},
    {name: 'paper', description: 'cardboard', recylable: "yes", quantity: 25, pricePerUnit: 0.05, _id: uuidv4()},
    {name: 'glass', description: 'dishes', recyclable: "yes", quantity: 12, pricePerUnit: 0.75, _id: uuidv4()}
];

// routes
    //endpoint: http://localhost:3000/recycledItems
    
recycledRouter
// get all
    // METHOD = GET | http://localhost:3000/recycledItems/
    .get('/', (req, res) => {
        res.send(recycledItems)
    })

// get one
    //METHOD = GET |  http://localhost:3000/recycledItems/:id
    .get('/:itemId', (req,res) => {
        const itemId = req.params.itemId;
        const singlarItem = recycledItems.find(item => itemId === itemId);
        
        res.send(singlarItem);
    })

    // METHOD = POST |  http://localhost:3000/recycledItems/
    .post('/', (req, res) => {
        const newItem = req.body;
        newItem._id = uuidv4();
        recycledItems.push(newItem);

        console.log(recycledItems)// to show the newItem added to the list
        res.send(`Adding ${newItem.name} to the data base was successful`);
    })

//delete one
    // METHOD = delete |  http://localhost:3000/recycledItems/:id
    .delete('/:itemId', (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = recycledItems.findIndex(item => itemId === itemId);
        recycledItems.splice(itemIndex, 1)

        res.send('Item sucessfully Deleted!!')
    })

//put one
    // METHOD = PUT | http://localhost:3000/recycledItems/:id
    .put('/:itemId', (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = recycledItems.findIndex(item => itemId === itemId);
        const updatedItem = Object.assign(recycledItems[itemIndex], req.body);

        res.send(`Item ${updatedItem} has been updated`);
    })

module.exports = recycledRouter;