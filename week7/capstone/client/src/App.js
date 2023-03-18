import { useState, useEffect } from 'react'
import axios from 'axios'


// Page layout and components
import Item from './components/films'
import MovieFormHandler from './components/movieFormHandler'
import MovieSearchHandler from './components/movieSearchHandler'

// Styling from the App.css file
import './App.css';



// Used to reload the page by button at bottom of the page
function refreshPage(){ 
  console.log("refreshing...")
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

  // Add (POST) items to the Express app
  const addItem = (newItem) => {
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
    const searchItem = (searchTerm) => {
      // Grab the text for the title search
      var searchString = searchTerm.title
      // Endpoint: GET - http://localhost:9000/movies/search/:id
      axios.get(`/movies/search/${searchString}`)
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
    }

  useEffect(() => { getItems() }, [])

  // Render the items to the DOM
  // Passing references to deleteItem, editItem, and Item element names to the Item component
  const itemList = items.map(item => 
    <Item
    {...item}
    deleteItem={deleteItem}
    editItem={editItem}
    key={item.title}
    /> 
  )

  // This creates the page layout
  return (
    <div className="itemContainer">
      <h1>Movie React Application</h1>
      <div>
          {/* When submitted it calls the addItem function above */}
          <MovieSearchHandler btnText='Search' submit={searchItem}/>
          {/* When submitted it calls the addItem function above */}
          <MovieFormHandler btnText='Add a Movie' submit={addItem}/>
      </div>
      {/* Calls the itemList fucntion above */}
      {itemList}
      <div className="refresh">
        <button className="add-btn" onClick={ refreshPage }>Reload Movies</button>
      </div>
      <p className="finePrint">Prepared for Bryan University - &copy; 2023 for FSW-125 Capstone</p>
    </div>
  );
}

// Need to export back to the index.js file
export default App;
