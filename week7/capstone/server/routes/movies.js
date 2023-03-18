const express = require('express');
const movieRouter = express.Router();

// require uuid for _id
const { v4: uuidv4 } = require('uuid');

let movies = [
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      streamable: true,
      runtime: 142,
      id: uuidv4()
    },
    {
      title: "The Godfather",
      genre: "Crime",
      year: 1972,
      streamable: false,
      runtime: 175,
      id: uuidv4()
    },
    {
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      streamable: true,
      runtime: 152,
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
      title: "Inception",
      genre: "Action",
      year: 2010,
      streamable: true,
      runtime: 148,
      id: uuidv4()
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      genre: "Fantasy",
      year: 2001,
      streamable: true,
      runtime: 178,
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
      title: "Star Wars: Episode IV - A New Hope",
      genre: "Sci-Fi",
      year: 1977,
      streamable: false,
      runtime: 121,
      id: uuidv4()
    },
    {
      title: "The Silence of the Lambs",
      genre: "Thriller",
      year: 1991,
      streamable: true,
      runtime: 118,
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
      title: "The Lion King",
      genre: "Animation",
      year: 1994,
      streamable: true,
      runtime: 88,
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
      title: "Gladiator",
      genre: "Action",
      year: 2000,
      streamable: true,
      runtime: 155,
      id: uuidv4()
    },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      genre: "Romance",
      year: 2004,
      streamable: true,
      runtime: 108,
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
    // METHOD = GET | http://localhost:9000/movies
    .get('/', (req, res) => {
        res.send(movies)
    })

// get one
    //METHOD = GET |  http://localhost:9000/movies/:id
    .get('/:itemId', (req,res) => {
        const itemId = req.params.itemId;
        const singlarItem = movies.find(movies => itemId === itemId);
      
        res.send(singlarItem);
  })

    // METHOD = POST |  http://localhost:9000/movies
    .post('/', (req, res) => {
        const newItem = req.body;
        newItem.id = uuidv4();
        movies.push(newItem);

        console.log(movies)// to show the newItem added to the list
        res.send(`Adding ${newItem.name} to the data base was successful`);
    })

    // METHOD = DELETED |  http://localhost:9000/movies/:id
    .delete('/:itemId', (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = movies.findIndex(movies => itemId === itemId);
        movies.splice(itemIndex, 1)

        res.send(`Movie sucessfully Deleted!!`)
    })

    // METHOD = PUT | http://localhost:9000/movies/:id
    .put('/:itemId', (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = movies.findIndex(movies => itemId === itemId);
        const updatedItem = Object.assign(movies[itemIndex], req.body);

        res.send(`Item ${updatedItem} has been updated`);
    })

    // ability to search by title and genre
    // SEARCH endpoint | http://localhost:9000/movies/search/:string
    .get('/search/:string', (req, res) => {
      console.log("SEARCHING FOR ITEMS ...")
      // Converted to lowercase for easy comparison
      // Grab the search term from the URL
      var searchString = req.params.string.toLowerCase()
      // Look for the name in the array, and find all that match
      const results = movies.filter(movies => {
          const filteredTitle = movies.title.toLowerCase().includes(searchString)
          const filteredGenre = movies.genre.toLowerCase().includes(searchString)
          //const filteredYear = movies.year
          return filteredTitle || filteredGenre // || filteredYear
      })
      // Send back all the matched movies from the array
      console.log(results)
      res.send(results)
  })

module.exports = movieRouter;
