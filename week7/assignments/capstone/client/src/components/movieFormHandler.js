import { useState } from "react";

// These values come from the item.js => MovieFormHandler component
const MovieFormHandler = ({title, genre, year, id, btnText, submit}) => {
    const initialInputs = {title: title || '', genre: genre || '', year: year || ''}
    const [movies, setMovies] = useState(initialInputs)

    // Handles input as the user types
    const handleChange = (e) => {
        console.log("...in handleChange (Item)")
        const {name, value} = e.target
        console.log('name ' + name)
        console.log('value ' + value)
        setMovies(prevInputs => ({...prevInputs, [name]: value}))
    }

    // Handles form submission
    const handleSubmit = (e) => {
        console.log("...in handleSubmit (Item)")
        e.preventDefault()
        submit(movies, id);
        setMovies(initialInputs)
        window.location.reload(false)
    }

    return(
        // Form used for updating an item 
        // calls handleSubmit function above
        <div className="addBox">
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='title' 
                    value={movies.title} 
                    onChange={handleChange}
                    placeholder='Movie Title' />
            &nbsp;&nbsp;
                <input
                    type='text'
                    name='genre'
                    value={movies.genre}
                    onChange={handleChange}
                    placeholder='Movie Genre' />
            &nbsp;&nbsp;
            <input
                    type='text'
                    name='year'
                    value={movies.year}
                    onChange={handleChange}
                    placeholder='Year Made' />
            &nbsp;&nbsp;
                <button className="newMovie">{btnText}</button>
            </form>
        </div>
    )
}

// Send to films.js file
export default MovieFormHandler;