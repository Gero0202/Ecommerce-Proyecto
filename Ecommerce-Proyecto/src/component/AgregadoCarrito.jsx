import React, { useEffect } from 'react'

const AgregadoCarrito = ({ mensaje, onClose, duracion = 3000, nombreProducto }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duracion)

    return () => clearTimeout(timer)
  }, [onClose, duracion])

  return (
    <div className="mensaje-container">
      <p>{mensaje} {nombreProducto}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  )
}

export default AgregadoCarrito
