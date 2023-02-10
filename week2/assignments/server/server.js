// Build multiple endpints for a server
// server used: http://localhost:3000
const express = require('express');
const app = express();
const Port = 3000

// API endpoints for get requests

let topic = [

    {topic: "HTML"},
    {topic: "JavaScript"},
    {topic: "CSS"},
    {topic: "Express"},
    {topic: "React"}
]


// this one worked as far as the list goes but not sure its what is meant for the assignment

// let topic = [

//     {topic: [
//         "HTML",
//         "JavaScript",
//         "CSS",
//         "Express",
//         "React"
//     ]}
// ]

//This is my attempt at putting it all in one curly brace- only returned the last object
// let topic = [

//     {topic: "HTML",
//     topic: "JavaScript",
//     topic: "CSS",
//     topic: "Express",
//     topic: "React"}
// ]

let music = [

    {music: "christian"},
    {music: "country"},
    {music: "pop"},
    {music: "Heavy Metal"},
    {music: "R&B"},
    {music: "jazz"},
    {music: "bluegrass"}
]

let game = [

    {game: "World of Warcraft"},
    {game: "Elder Scrolls Online"},
    {game: "Red Dead Redemption online"},
    {game: "Grand Theft Auto Online"},
    {game: "Dayz"},
    {game: "Ghost Recon Breakpoint"}
]

let snack = [

    {snack: "twinkies"},
    {snack: "Hostess fruit pies"},
    {snack: "Doritos"},
    {snack: "Cheetos"},
    {snack: "pizza rolls"},
    {snack: "doughnuts"}
]

// API get requests for server endpoints


//endpoint for topic: http://localhost:3000/topic
app.get('/topic', (req, res) => {
    res.send(topic);
});

//endpoint for music: http://localhost:3000/music
app.get('/music', (req, res) => {
    res.send(music);
});

//endpoint for game: http://localhost:3000/game
app.get('/game', (req, res) => {
    res.send(game);
});

//endpoint for snack: http://localhost:3000/snack
app.get('/snack', (req, res) => {
    res.send(snack);
});



//server start logic
app.listen(Port, (() => {
    console.log(`App started on port: ${Port}`)
}))