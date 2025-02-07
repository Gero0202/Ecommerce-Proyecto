import React from "react"
import useFetch from "../Hook/useFetch"
import { useCart } from "../context/CartContext"
import Loading from "./Loading"


const Coleccion = () => {

  const { data, loading, error } = useFetch("coleccion")
  const { addToCart } = useCart()



  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>Error {error}</p>
      ) : (
        <div id="contenedor">
          {data.map((product) => (
            <div className="perfume-card" key={product.id}>

              <img src={product.img} alt={product.name} />
              <div className="card-info">
                <p className="nombre-perfume">{product.name}</p>
                <p className="precio-perfume">${product.price}</p>
                <button
                  className="boton-perfume"
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                >
                  Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Coleccion


