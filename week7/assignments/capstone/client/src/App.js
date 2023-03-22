import { useState, useEffect } from 'react'
import axios from 'axios'


// Page layout and components
import Films from './components/films'
import MovieFormHandler from './components/movieFormHandler'
import MovieSearchHandler from './components/movieSearchHandler'

// Styling from the App.css file
import './App.css';



// Used to reload the page by button at bottom of the page
function refreshPage(){ 
  console.log("Page Reloaded!!!")
  window.location.reload(false)
}

function App() {

  const [items, setItems] = useState([])

// Retrieve (GET) items from the Express app
  const getItems = () => {
    // Endpoint: GET - http://localhost:9000/movies
    axios.get('/movies')
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }

// Create (POST) items to the Express app
  const addMovie = (newItem) => {
    // Endpoint: POST - http://localhost:9000/movies
    axios.post('/movies', newItem)
    .then(res => {
      setItems(prevItem => [...prevItem, res.data]) 
    })
    .catch(err => console.log(err))
  }

// Update (PUT) items in the Express app
  const editItem = (updates, itemId) => {
    // Endpoint: PUT - http://localhost:9000/movies/:id
    axios.put(`/movies/${itemId}`, updates)
      .then(res => {  
        setItems(prevItem => prevItem.map(item => item.id !== itemId ? item : res.data))
      })
      .catch(err => console.log(err))
    }

// Delete (DELETE) items in the Express app
  const deleteItem = (itemId) => {
    // Endpoint: DELETE - http://localhost:9000/movies/:id
    axios.delete(`/movies/${itemId}`)
    .then(res => {
      setItems(prevItem => prevItem.filter(item => item.id !== itemId))
    })
    .catch(err => console.log(err))
  }

// Search (GET) items in the Express app
    const searchMovie = (items) => {
      // Grab the text for the title search
      var searchFilms = items.title
      console.log(searchFilms)
      // Endpoint: GET - http://localhost:9000/movies/search/:id
      axios.get(`/movies/search/${searchFilms}`)
      // Reloads the page with new created movie list
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
    }

  useEffect(() => { getItems() }, [])

// Render the items to the DOM
  const movieList = items.map(item => 
    <Films
    {...item}
    deleteItem={deleteItem}
    editItem={editItem}
    key={items.title}
    /> 
  )

// Layout for the Page
  return (
    <div>
      <div className="itemContainer">
        <h1>Movie React Application</h1>
        <div>
          <MovieSearchHandler btnText='Search' submit={searchMovie}/>
          <MovieFormHandler btnText='Add a Movie' submit={addMovie}/>
        </div>
        {movieList}
        <div className="refresh">
          <button className="add-btn" onClick={ refreshPage }>Reload Movies</button>
        </div>
      </div>
      <p className="finePrint">Prepared for Bryan University - &copy; 2023 for FSW-125 Capstone</p>
    </div>
  );
}

// send to index.js file
export default App;
