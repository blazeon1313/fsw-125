import { useState } from "react"
import MovieFormHandler from "./movieFormHandler"

// Create the item object to be used on the page
const Films = ({editItem, deleteItem, title, genre, year, id}) => {

    const [editToggle, setEditToggle] = useState(false)

    // Used to display the movie and details in a list on the page
    return(
        <div className="films">
            { !editToggle ?
                <>
                    <p className="title">{title}</p> 
                    <p className="genre">{genre} </p>
                    <p ClassName="year">{year}</p>
                    <p className="buttons">
                        <button className="delete-btn" onClick={() => deleteItem(id)}>Delete</button>
                        <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                    </p> 
                </>
                :
                <>
                    <MovieFormHandler 
                        title={title}
                        genre={genre}
                        year={year}
                        id={id}
                        btnText='Submit'
                        submit={editItem}
                    />
                    <button className="submit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }   
        </div>
    )
}

// send to App.js file
export default Films;