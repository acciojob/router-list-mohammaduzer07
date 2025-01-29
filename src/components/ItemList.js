
import React from 'react'
import { Link } from 'react-router-dom'


const ItemList = ({items}) =>{

    return <div>
        <h1>Item List</h1>
        <ul>
            {items.map((item) =>{
                return (<li key={item.id}>
                    <Link to={`/item/${item.id}`}>{item.name}</Link>
                </li>
                )
            })}
        </ul>
    </div>
}

export default ItemList