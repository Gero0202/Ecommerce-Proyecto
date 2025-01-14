import React, { useState } from 'react'
import ItemsCounts from './ItemsCount'
import { Link } from 'react-router-dom'

const Item = ({product, onAddToCart}) => {

    const [showCounter, setShowCounter] = useState(false)
    const handdleToggleCount = () =>{
        setShowCounter((prevState) => !prevState)
    }

    const handleAdd = (quantity) =>{
        onAddToCart(quantity)
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
{}