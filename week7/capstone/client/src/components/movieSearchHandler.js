import { useState } from "react";

// These values come from the item.js => ItemFormHandler component
const MovieSearchHandler = ({title, genre, id, year, btnText, submit}) => {
    const initialInputs = {title: title || '', genre: genre || '', year: year || ''}
    const [inputs, setInputs] = useState(initialInputs)

    // Handles input as the user types
    const handleChange = (e) => {
        const {title, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [title]: value}))
    }

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(inputs, id);
        setInputs(initialInputs)
    }

    return(
        // Form used for searching for an item by name
        // When button clicked, calls handleSubmit function above
       <div className="searchBox">
        <form onSubmit={handleSubmit}>
            <p>Search (by title):&nbsp;&nbsp;
                <input
                type='text'
                name='name'
                // As you type the value changes
                onChange={handleChange}
                placeholder='Movie Title...'/>
                &nbsp;&nbsp;
                <button className="add-item">{btnText}</button>
                </p>
            </form>
        </div>

    )
}

export default MovieSearchHandler;