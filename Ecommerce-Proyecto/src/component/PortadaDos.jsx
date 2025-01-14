import React from "react"
import imgPortadaDos from "../img/dolcegabbanaperfume.jpg"

const PortadaDos = ({ onAddToCart }) => {
  
 
    const product = {
      nombre: "Dolce & Gabbana The Only One"
    }

  return (
    <div id="perfume-2">
      <img src={imgPortadaDos} alt="perfume" />
      <div className="texto-perfume">
        <p>Nuevo perfume Dolce & Gabbana</p>
        <p>
          Descubre la esencia única de The Only One, una fragancia que fusiona
          la sofisticación y el misterio en una experiencia sensorial
          incomparable. Con sus notas florales y amaderadas, este perfume es la
          expresión perfecta de la elegancia atemporal y la feminidad
          cautivadora. Haz de The Only One tu sello personal, una fragancia que
          solo tú puedes llevar.
        </p>
        <button
          className="btn-agregar-carrito"
          onClick={() => onAddToCart(1, product.nombre)} 
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default PortadaDos


