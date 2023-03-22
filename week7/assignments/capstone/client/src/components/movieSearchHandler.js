import { useState } from "react";

// These values come from the item.js => movieFormHandler component
const MovieSearchHandler = ({title, genre, id, btnText, submit}) => {
    const initialInputs = {title: title || '', genre: genre || ''}
    const [inputs, setInputs] = useState(initialInputs)
    const [query, setQuery] = useState('');
    // Shows input as the user types
    const handleChange = (e) => {
        const {title, value} = e.target
        setInputs(prevInputs => ({...prevInputs, 'title': value}))
        console.log('title ' + title)
        console.log('value ' + value)
    }

    // Form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs);
        submit(inputs, id);
        setQuery(e.target.value)
        setInputs(initialInputs)
    }

    return(
       <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <p>Search (by Title or Genre):&nbsp;&nbsp;
                    <input
                    type='text'
                    name={query}
                    onChange={handleChange} //shows what is typed
                    placeholder='Movie Title or Genre'
                    required />
                    &nbsp;&nbsp;
                    <button className="add-item">{btnText}</button>
                </p>
            </form>
        </div>

    )
}

// Send to App.js file
export default MovieSearchHandler;