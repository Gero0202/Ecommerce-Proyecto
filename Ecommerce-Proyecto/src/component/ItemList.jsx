import React from 'react'
import Item from "./Item"

const ItemList = ({productos, onAddToCart}) => {
  return (
    <div className='item-list'>
      {productos.map((product) =>(
        <Item
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}        
        />
      ))}
    </div>
  )
}


export default ItemList
