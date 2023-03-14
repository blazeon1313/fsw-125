import { useState } from "react"
import HandleItemForm from "./handleItemForm";

// Create the item object to be used on the page
const Item = ({name, description, quantity, pricePerUnit, _id, deleteItem, editItem}) => {

    const [editToggle, setEditToggle] = useState(false)

    // Used to display the item and its details in a list
    return(
        <div className="items">
                    { !editToggle ?
                <>
                    <h2>Item: {name} </h2>
                    <p>Description: {description} </p>
                    <p>Quantity: {quantity} </p>
                    <p>Price per unit: {pricePerUnit} </p>
                    <button 
                        onClick={() => deleteItem(_id)} 
                        className='del-btn'>
                        Delete
                    </button>
                    <button 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)} 
                        className='edit-btn'>
                        Edit
                    </button>
                </>
                :
                <>
                    < HandleItemForm 
                        name={name}
                        description={description}
                        quantity={quantity}
                        pricePerUnit={pricePerUnit}
                        btnText='Submit'
                        _id={_id}
                        onClick={editItem} />
                        <button className='close-btn'
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                            Close
                        </button>
                </>
            }   
        </div>
    )
}

export default Item;