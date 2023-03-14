const express = require('express');
const animalsRouter = express.Router();

// require uuid for _id
const { v4: uuidv4 } = require('uuid');


const animals = [
    {
        name: 'buckskin',
        type: 'horse',
        height: 14,
        id: uuidv4()
    },
    {
        name: 'aussie',
        type: 'dog',
        height: 1.5,
        id: uuidv4()
    },
    {
        name: 'paint',
        type: 'horse',
        height: 15,
        id: uuidv4()
    },
    {
        name: 'corgi',
        type: 'dog',
        height: 1,
        id: uuidv4()
    },
    {
        name: 'holstien',
        type: 'cow',
        height: 6,
        id: uuidv4()
    },
    {
        name: 'angus',
        type: 'cow',
        height: 6,
        id: uuidv4()
    },
    {
        name: 'hereford',
        type: 'cow',
        height: 6,
        id: uuidv4()
    },
    {
        name: 'quarter horse',
        type: 'horse',
        height: 15,
        id: uuidv4()
    },
    {
        name: 'great dane',
        type: 'dog',
        height: 4,
        id: uuidv4()
    },
    {
        name: 'pug',
        type: 'dog',
        height: 0.5,
        id: uuidv4()
    }
]

animalsRouter
    //endpoint http://localhost:9000/animals
    .get('/', (req, res) => {
        res.send(animals)
    })

// get one
    //METHOD = GET |  http://localhost:9000/animals/:id
    .get('/:itemId', (req,res) => {
        const itemId = req.params.itemId;
        const singularItem = animals.find(animals => animals.id === itemId);
        
        res.send(singularItem);
    })

    //search for type
    //Method - GET | http://localhost:9000/animals/search/type
    .get('/search/type', (req, res) => {
        const animalsType = req.query.type;
        const filteredAnimals = animals.filter(animals => animals.type === animalsType)
        
        res.send(filteredAnimals);
    })

    //search for name
    //Method - GET | http://localhost:9000/animals/search/name
    .get('/search/name', (req, res) => {
        const animalsName = req.query.name;
        const filteredName = animals.filter(animals => animals.name === animalsName);
    
        res.send(filteredName);
    })

    // METHOD = POST |  http://localhost:9000/animals
    .post('/', (req, res) => {
        const newItem = req.body;
        newItem.id = uuidv4();
        animals.push(newItem);

        console.log(animals)// to show the newItem added to the list
        res.send(`Adding ${newItem.name} to the data base was successful`);
    })

    // METHOD = delete |  http://localhost:9000/animals/:id
    .delete('/:itemId', (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = animals.findIndex(animals => animals.id === itemId);
        animals.splice(itemIndex, 1)

        res.send(`${item} sucessfully Deleted!!`)
    })

    // METHOD = PUT | http://localhost:9000/animals/:id
    .put('/:itemId', (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = animals.findIndex(animals => animals.id === itemId);
        const updatedItem = Object.assign(animals[itemIndex], req.body);

        res.send(`Item ${updatedItem} has been updated`);
    })


module.exports = animalsRouter;