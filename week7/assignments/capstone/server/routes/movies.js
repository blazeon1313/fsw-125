const express = require('express');
const movieRouter = express.Router();

// require uuid for _id
const { v4: uuidv4 } = require('uuid');

let movies = [
  {
    title: "The Godfather",
    genre: "Crime",
    year: 1972,
    streamable: false,
    runtime: 175,
    id: uuidv4()
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    streamable: true,
    runtime: 142,
    id: uuidv4()
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    streamable: false,
    runtime: 154,
    id: uuidv4()
  },
  {
    title: "The Matrix",
    genre: "Action",
    year: 1999,
    streamable: true,
    runtime: 136,
    id: uuidv4()
  },
  {
    title: "The Terminator",
    genre: "Action",
    year: 1984,
    streamable: false,
    runtime: 107,
    id: uuidv4()
  },
  {
    title: "Jurassic Park",
    genre: "Adventure",
    year: 1993,
    streamable: true,
    runtime: 127,
    id: uuidv4()
  },
  {
    title: "Goodfellas",
    genre: "Crime",
    year: 1990,
    streamable: true,
    runtime: 146,
    id: uuidv4()
  },
  {
    title: "Fight Club",
    genre: "Drama",
    year: 1999,
    streamable: true,
    runtime: 139,
    id: uuidv4()
  },
  {
    title: "Back to the Future",
    genre: "Adventure",
    year: 1985,
    streamable: false,
    runtime: 116,
    id: uuidv4()
  },
  {
    title: "Titanic",
    genre: "Drama",
    year: 1997,
    streamable: false,
    runtime: 194,
    id: uuidv4()
  }
]

// routes
    //endpoint: http://localhost:9000/movies
    
movieRouter
//Get all
    // METHOD = GET | http://localhost:9000/movies
    .get('/', (req, res) => {
        res.send(movies)
    })

// get one
    //METHOD = GET |  http://localhost:9000/movies/:id
    .get('/:movieId', (req,res) => {
        const movieId = req.params.movieId;
        const singlarItem = movies.find(movie => movie.id === movieId);
      
        res.send(singlarItem);
  })

//Post ( Create new listing )
    // METHOD = POST |  http://localhost:9000/movies
    .post('/', (req, res) => {
        const newMovie = req.body;
        newMovie.id = uuidv4();
        movies.push(newMovie);

        console.log(movies)// to show the new movie added to the list
        res.send(newMovie);
    })

// Delete ( Delete movir from list )
    // METHOD = DELETED |  http://localhost:9000/movies/:id
    .delete('/:movieId', (req, res) => {
        const movieId = req.params.itemId;
        const movieIndex = movies.findIndex(movie => movie.id === movieId);
        movies.splice(movieIndex, 1)

        res.send(`Movie sucessfully Deleted!!`)
    })

// Put
    // METHOD = PUT | http://localhost:9000/movies/:id
    .put('/:movieId', (req, res) => {
        const movieId = req.params.movieId;
        const itemIndex = movies.findIndex(item => item.id === movieId);
        Object.assign(movies[itemIndex], req.body);

        res.send(movies[itemIndex]);
    })

// Search
    // ability to search by title and genre
    // SEARCH endpoint | http://localhost:9000/movies/search/:string
    .get('/search/:string', (req, res) => {
      console.log("Searching For Movies")

      var searchString = req.params.string
      console.log(searchString)
      const results = movies.filter(movies => {
          const filteredTitle = movies.title.toLowerCase().includes(searchString)
          const filteredGenre = movies.genre.toLowerCase().includes(searchString)
// I tried to get the search to also include by year      
          //const filteredYear = movies.year
          return filteredTitle || filteredGenre // || filteredYear
      })

      console.log(results)
      res.send(results)
  })

module.exports = movieRouter;
