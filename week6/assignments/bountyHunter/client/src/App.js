import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

// Brings in content for the page layout and components
import Recyclables from './components/Recyclables';
import HandleItemForm from './components/handleItemForm';

//images for the page
import recycled from './images/recycled.jfif';
import reduce from './images/reduce.jfif';
import recycleImage from './images/recycleImage.png';

// Page refresh on click
function refreshPage(){ 
  console.log("refreshing...")
  window.location.reload(false)
}

function App() {
  const [recycle, setRecycle] = useState([]);

  // Retrieve (GET) items from Express app
  const getItems = () => {
    // Endpoint: GET - http://localhost:9000/routes/recycleditems
    axios.get('/recycledItems')
  .then(res => setRecycle(res.data))
  .catch(err => console.log(err))
  }

  //Create (POST) items in Express app
  const addItem = (newitem) => {
    // Endpoint: POST - http://localhost:9000/routes/recycleditems
    axios.post('/recycledItems', newitem)
      .then(res => {
        setRecycle(prevItems => [...prevItems, res.data])
      })
      .catch(err => console.log(err))
  };

  //Delete (DELETE) items in Express app
  const deleteItem = (itemId) => {
    // Endpoint: DELETE - http://localhost:9000/routes/recycleditems
    axios.delete(`/recycledItems/${itemId}`)
    .then(res => {
      setRecycle(prevItem => prevItem.filter(item => item._id !== itemId))
    })
    .catch(err => console.log(err))
  }

  //Update (PUT) items in Express app
  const editItem = (updates, itemId) => {
    // Endpoint: PUT - http://localhost:9000/routes/recycleditems/:id
    axios.put(`/recycledItems/${itemId}`, updates)
    .then(res => {
      setRecycle(prevItem => prevItem.map(item => item._id !== itemId ? item : res.data))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => { getItems() }, []);

  const recycledList = recycle.map(items => 
    <Recyclables 
    {...items} 
    deleteItem={deleteItem} 
    editItem={editItem}
    key={Recyclables.id}/>)

  return (
    <div>
      <h1>Recycle React App</h1>
      <div className="App">
        <HandleItemForm 
        submit={addItem}  
        btnText='Add Item' />
        {recycledList}
      </div>
      <div className="page-reload">
        <button className="refresh" onClick={ refreshPage }>Reload Page</button>
      </div>
      <div className="images">
        <img className="recycled" src={recycled} alt="recycled"/>
        <img className="reduce" src={reduce} alt="reduce"/>
        <img className="recImage" src={recycleImage} alt="recycleImage"/>
      </div>
    </div>
  );
}

export default App;