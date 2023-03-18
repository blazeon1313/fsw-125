import { useState } from "react";

// These values come from the item.js => ItemFormHandler component
const MovieFormHandler = ({title, genre, year, id, btnText, submit}) => {
    const initialInputs = {title: title || '', genre: genre || '', year: year || ''}
    const [inputs, setInputs] = useState(initialInputs)

    // Handles input as the user types
    const handleChange = (e) => {
        const {title, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [title]: value, [genre]: value, [year]: value}))
    }

    // Handles form submission
    const handleSubmit = (e) => {
        console.log("...in handleSubmit (Item)")
        e.preventDefault()
        submit(inputs, id);
        setInputs(initialInputs)
    }

    return(
        // Form used for updating an item 
        // calls handleSubmit function above
        <div className="addBox">
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    value={inputs.title}
                    onChange={handleChange}
                    placeholder='Movie Title...'/>
            &nbsp;&nbsp;
                <input
                    type='text'
                    name="genre"
                    value={inputs.genre}
                    onChange={handleChange}
                    placeholder="Genre..."/>
            &nbsp;&nbsp;
                <input
                    type='text'
                    name="year"
                    value={inputs.year}
                    onChange={handleChange}
                    placeholder="Year..."/>
            &nbsp;&nbsp;
                <button className="newMovie">{btnText}</button>
            </form>
        </div>
    )
}

export default MovieFormHandler;