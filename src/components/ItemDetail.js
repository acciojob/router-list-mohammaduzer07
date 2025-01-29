import React from 'react'
import { useParams } from 'react-router-dom';

const ItemDetails = ({items}) =>{

    const {id} = useParams();

    const item = items.find((item)=> item.id === parseInt(id))
    return <div>
        {item ? (
            <div>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
            </div>
            ) : (
                <p>Item not found</p>
            )}
    </div>
}

export default ItemDetails