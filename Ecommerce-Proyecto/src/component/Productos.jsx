import React, { useState } from 'react'
import img1 from "../img/coconoirchanel.jpg"
import img2 from "../img/sauvagedior.jpg"
import img3 from "../img/yvessaintlaurent.jpg"
import img4 from "../img/gentlemangivenchy.jpg"
import img5 from "../img/mostwantedazzaro.jpg"
import img6 from "../img/pradamilano.jpg"
import img7 from "../img/intensemanclubdenuit.jpg"
import img8 from "../img/chaneln5.jpg"
import ItemsCounts from "./ItemsCount"


const Productos = ({ onAddToCart }) => {
  const [showCounter, setShowCounter] = useState(null)
   

  const productos = [
    { id: 1, name: "Coco Noir CHANEL", price: 560, img: img1 },
    { id: 2, name: "Sauvage DIOR", price: 820, img: img2 },
    { id: 3, name: "Yves Saint Lauren", price: 670, img: img3 },
    { id: 4, name: "Gentleman GIVENCHI", price: 400, img: img4 },
    { id: 5, name: "Most Wanted AZZARO", price: 570, img: img5 },
    { id: 6, name: "Milano PRADA", price: 680, img: img6 },
    { id: 7, name: "Club De Nouit ARMAF CLUB", price: 870, img: img7 },
    { id: 8, name: "Nº 5 CHANEL", price: 500, img: img8 },
  ]

 
  const handleCounter = (productId) => {
    setShowCounter((prevId) => (prevId === productId ? null : productId))
  }

  const handleAdd = (quantity) => {
    onAddToCart(quantity)
    setShowCounter(null)
  }

  

  return (
    <div id="catalogo">
      {productos.map(product => (
        <div className="card" key={product.id}>
          <img src={product.img} alt={product.name} />
          <p className="card-title">{product.name}</p>
          <p className="card-price">${product.price}</p>
          
          <button
            className="card-btn"
            onClick={() => handleCounter(product.id)}>
            {showCounter === product.id ? 'Cancelar' : 'Agregar'}
          </button>

          {showCounter === product.id && (
            
            <ItemsCounts
              stock={10}
              inicial={1}
              onAdd={handleAdd} 
            />
          )}
           
          
        </div>
      ))}
    </div>
  )
}

export default Productos
