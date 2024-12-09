import React from "react"
import imgBoss from "../img/hugoboss.jpg"
import imgPolo from "../img/poloblackralphlauren.jpg"
import imgMont from "../img/montblanc.jpg"


const Coleccion = ({ onAddToCart }) => {

  

  const productos = [
    { id: 1, name: "HUGO BOSS The Scent", price: 967, img: imgBoss },
    { id: 2, name: "RALPH LAUREN Polo Black", price: 890, img: imgPolo },
    { id: 3, name: "MONT BLANC Legend Night", price: 700, img: imgMont },
  ]

 
  return (
    <div id="contenedor">
      {productos.map((product) => (
        <div className="perfume-card" key={product.id}>
          <img src={product.img} alt={product.name} />
          <div className="card-info">
            <p className="nombre-perfume">{product.name}</p>
            <p className="precio-perfume">${product.price}</p>
            <button
              className="boton-perfume"
              onClick={() => onAddToCart(1)} 
            >
              Agregar
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Coleccion


