//recycled Items Route
const express = require('express');
const recycledRouter = express.Router();

// require uuid for _id
const { v4: uuidv4 } = require('uuid');

// data

let recycledItems = [
    {name: 'Newspaper', description: 'paper', recylable: "yes", quantity: 5, pricePerUnit: 1.00, _id: uuidv4()},
    {name: 'Mason Jar', description: 'glass', recyclable: "yes", quantity: 3, pricePerUnit: 0.50, _id: uuidv4()},
    {name: 'cardboard', description: 'paper', recylable: "yes", quantity: 25, pricePerUnit: 0.05, _id: uuidv4()},
    {name: 'dishes', description: 'glass', recyclable: "yes", quantity: 12, pricePerUnit: 0.75, _id: uuidv4()}
];

// routes
    //endpoint: http://localhost:9000/routes/recycledItems
    
recycledRouter
    // METHOD = GET | http://localhost:9000/routes/recycledItems
    .get('/', (req, res) => {
        res.send(recycledItems)
    })

    // METHOD = POST |  http://localhost:9000/routes/recycledItems
    .post('/', (req, res) => {
        const newItem = req.body;
        newItem._id = uuidv4();
        recycledItems.push(newItem);

        console.log(recycledItems)// to show the newItem added to the list
        res.send(`Adding ${newItem.name} to the data base was successful`);
    })

    // METHOD = DELETED |  http://localhost:9000/routes/recycledItemss/:id
    .delete('/:itemId', (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = recycledItems.findIndex(item => itemId === itemId);
        recycledItems.splice(itemIndex, 1)

        res.send('Item sucessfully Deleted!!')
    })

    // METHOD = PUT | http://localhost:9000/routes/recycledItems/:id
    .put('/:itemId', (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = recycledItems.findIndex(item => itemId === itemId);
        const updatedItem = Object.assign(recycledItems[itemIndex], req.body);

        res.send(`Item ${updatedItem} has been updated`);
    })

module.exports = recycledRouter;