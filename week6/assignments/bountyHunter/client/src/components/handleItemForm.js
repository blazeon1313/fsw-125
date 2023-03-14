import { useState } from "react";

function refreshPage(){
    console.log("refreshing...")
    window.location.reload(false)
}

const HandleItemForm = ({name, description, quantity, pricePerUnit, _id, submit, btnText}) => {
    const initialInputs = {name: name || '', description: description || '', quantity: quantity || '', pricePerUnit: pricePerUnit || ''}
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit( inputs, _id )
        setInputs(initialInputs)
        refreshPage()
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                    placeholder="Item"/>
                <input
                    type='text'
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                    placeholder="Description"/>
                <input
                    type='text'
                    name="quantity"
                    value={inputs.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"/>
                <input
                    type='text'
                    name='pricePerUnit'
                    value={inputs.pricePerUnit}
                    onChange={handleChange}
                    placeholder='Price per unit'/>
                <button className="add-btn">
                    {btnText}
                </button>
            </form>
        </div>
    )
}

export default HandleItemForm;