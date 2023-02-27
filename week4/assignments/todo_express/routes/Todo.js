// File for Todo Endpoints
// create multiple endpoints 

const express = require('express');
const todoRouter = express.Router();
//const movieRouter = express.Router()

// require uuid for id
const { v4: uuidv4 } = require('uuid');

// data for todoList
let todoList = [

    {name: "wakeUp", description: "Get out of bed", time: "6:00 Am", id: uuidv4()},
    {name: "Breakfast", description: "Eat bowl of cereal", time: "7:30 Am", id: uuidv4()},
    {name: "Work", description: "Day to Day job", time: "9:00 Am", id: uuidv4()},
    {name: "Dinner", description: "Enjoy meal", time: "6:30 Pm", id: uuidv4()},
    {name: "Sleep", description: "Go to bed for the night", time: "10:00 Pm", id: uuidv4()}
];


// Tried to do multiple data lists off the same file but only 
// the last module.exports would generate on the page


// data for the movieList
// let movieList = [
//     {name: "Armagedon", year: 1998, rating: "PG-13", genre: "Action/Adventure", id: uuidv4()},
//     {name: "Only the Brave", year: 2017, rating: "PG-13", genre: "Action/Biography", id: uuidv4()},
//     {name: "Convoy", year: 1978, rating: "PG", genre: "Action/Drama", id: uuidv4()},
//     {name: "Planes: Fire and Rescue", year: 2014, rating: "PG", genre: "Animation/Adventure", id: uuidv4()}
// ];


todoRouter
    //endpoint http://localhost:3000/todo
    .get('/', (req, res) => {
        res.send(todoList)
    })

// get one
    //METHOD = GET |  http://localhost:3000/todo/:id
    .get('/:itemId', (req,res) => {
        const itemId = req.params.itemId;
        const singlarItem = todoList.find(item => itemId === itemId);
        
        res.send(singlarItem);
    })

    // METHOD = POST |  http://localhost:3000/todo
    .post('/', (req, res) => {
        const newItem = req.body;
        newItem._id = uuidv4();
        todoList.push(newItem);

        console.log(todoList)// to show the newItem added to the list
        res.send(`Adding ${newItem.name} to the data base was successful`);
    })

    // METHOD = delete |  http://localhost:3000/todo/:id
    .delete('/:itemId', (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = todoList.findIndex(item => itemId === itemId);
        todoList.splice(itemIndex, 1)

        res.send(`${item} sucessfully Deleted!!`)
    })

    // METHOD = PUT | http://localhost:3000/todo/:id
    .put('/:itemId', (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = todoList.findIndex(item => itemId === itemId);
        const updatedItem = Object.assign(todoList[itemIndex], req.body);

        res.send(`Item ${updatedItem} has been updated`);
    })

// movieRouter
//     // endpoint http://localhost:3000/movies
//     .get('/', (req, res) => {
//         res.send(movieList)
//     });

module.exports = todoRouter;
//module.exports = movieRouter;