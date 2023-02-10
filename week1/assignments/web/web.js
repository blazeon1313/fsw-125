var express = require('express')
var app = express()
const port = 3000

// GET - Endpoint http://localhost:3000
app.get('/', function(req, res){
    console.log('Listening for a GET request')
    res.send('This is a GET-Hello World')
})

// GET = Endpoint http://localhost:3000/test
app.get('/test', function(req, res){
    console.log('Listening for a GET request')
    res.send('This is a GET-Hello World for TEST')
})

// POST - Endpoint http://localhost:3000
app.post('/', function(req, res) {
    console.log('Listening for a POST request')
    res.send('This is a POST-Hello World')
})

// POST = Endpoint http://localhost:3000/test
app.post('/test', function(req, res) {
    console.log('Listening for a POST request')
    res.send('This is a POST-Hello World for TEST')
})

// Listener for the port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})