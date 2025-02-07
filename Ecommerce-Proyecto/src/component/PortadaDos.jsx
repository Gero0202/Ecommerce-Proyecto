import React from "react"
import  useFetch  from "../Hook/useFetch"
import { useCart } from "../context/CartContext"
import Loading from "./Loading"


const PortadaDos = () => {

  const { data, loading, error } = useFetch("unicoProducto")
  const { addToCart } = useCart()

  if (loading) return <Loading/>
  if (error) return <p>Error: {error}</p>

  if (!data || data.length === 0) {
    return <Loading />;
  }

  const product = data[0]

  return (
    <div id="perfume-2">
      <img src={product.img} alt={product.name} />
      <div className="texto-perfume">
        <p>{product.name}</p>
        <p> {product.description} </p>
        <p >Precio: ${product.price}</p>
        <button
          className="btn-agregar-carrito"
          onClick={() => addToCart({ ...product, quantity: 1 })}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default PortadaDos


