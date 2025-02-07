import React from 'react'
import { useParams } from 'react-router-dom'
import productos from '../service/constantes'



const DetalleProducto = () => {

    const { id } = useParams()
    const product = productos.find(p => p.id === parseInt(id))

    return (
        <div className="detalle-container">
            <h1>{product.name}</h1>
            <img src={product.img} />
            <p className="price">Precio: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default DetalleProducto
