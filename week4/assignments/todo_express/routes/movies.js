// File for movielist endpoint
const express = require('express');
const movieRouter = express.Router()

// require uuid for id
const { v4: uuidv4 } = require('uuid');

// data for the endpoint movieList
let movieList = [
    {name: "Armagedon", year: 1998, rating: "PG-13", genre: "Action/Adventure", id: uuidv4()},
    {name: "Only the Brave", year: 2017, rating: "PG-13", genre: "Action/Biography", id: uuidv4()},
    {name: "Convoy", year: 1978, rating: "PG", genre: "Action/Drama", id: uuidv4()},
    {name: "Planes: Fire and Rescue", year: 2014, rating: "PG", genre: "Animation/Adventure", id: uuidv4()}
];

movieRouter // endpoint http://localhost:3000/movielist
// get all
    //METHOD = GET |  http://localhost:3000/movielist  
    .get('/', (req, res) => {
        res.send(movieList)
    })

// get one
    //METHOD = GET |  http://localhost:3000/movielist/:id
    .get('/:itemId', (req,res) => {
        const itemId = req.params.itemId;
        const singlarItem = movieList.find(item => itemId === itemId);
        
        res.send(singlarItem);
    })

    // METHOD = POST |  http://localhost:3000/movielist
    .post('/', (req, res) => {
        const newItem = req.body;
        newItem._id = uuidv4();
        movieList.push(newItem);

        console.log(movieList)// to show the newItem added to the list
        res.send(`Adding ${newItem.name} to the data base was successful`);
    })

    // METHOD = delete |  http://localhost:3000/movielist/:id
    .delete('/:itemId', (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = movieList.findIndex(item => itemId === itemId);
        movieList.splice(itemIndex, 1)

        res.send(`${item} sucessfully Deleted!!`)
    })

    // METHOD = PUT | http://localhost:3000/movielist/:id
    .put('/:itemId', (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = movieList.findIndex(item => itemId === itemId);
        const updatedItem = Object.assign(movieList[itemIndex], req.body);

        res.send(`Item ${updatedItem} has been updated`);
    })

module.exports = movieRouter;