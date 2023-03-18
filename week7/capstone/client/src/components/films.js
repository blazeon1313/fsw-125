import { useState } from "react"
import MovieFormHandler from "./movieFormHandler"

// Create the item object to be used on the page
const Item = ({editItem, deleteItem, title, genre, year,  id}) => {

    const [editToggle, setEditToggle] = useState(false)

    // Used to display the item and its details in a list
    return(
        <div className="item">
            { !editToggle ?
                <>
                    {/* Template */}
                    <p className="medium">{title}</p> 
                    <p className="wide">{genre} </p>
                    <p className="small">{year} </p>
                    <p className="narrow">
                        <button className="delete-btn" onClick={() => deleteItem(id)}>Delete</button>
                        <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                    </p> 
                </>
                :
                <>
                    {/* Form used for editing an item */}
                    <MovieFormHandler 
                    title={title}
                    genre={genre}
                    year={year}
                    id={id}
                    btnText='Submit'
                    submit={editItem}/>
                    <button className="submit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }   
        </div>
    )
}

export default Item;