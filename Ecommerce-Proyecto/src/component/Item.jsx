import React, { useState } from 'react'
import ItemsCounts from './ItemsCount'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Item = ({ product, onAddToCart }) => {

  const [showCounter, setShowCounter] = useState(false)
  const { addToCart } = useCart()

  const handdleToggleCount = () => {
    setShowCounter((prevState) => !prevState)
  }

  const handleAdd = (quantity) => {
    addToCart({
      id: product.id, 
      name: product.name,
      price: product.price,
      quantity: quantity  
    })
    
    setShowCounter(false)
  }


  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <p className="card-title">{product.name}</p>
      <p className="card-price">${product.price}</p>

      <button className="card-btn" onClick={handdleToggleCount}>
        {showCounter ? 'Cancelar' : 'Agregar'}
      </button>

      {showCounter && <ItemsCounts stock={10} inicial={1} onAdd={handleAdd} />}
      <Link to={`/producto/${product.id}`} className="details-link">Ver detalles</Link>
    </div>
  )
}

export default Item
