import React from 'react'
import PortadaInicial from '../component/PortadaInicial'
import Productos from '../component/Productos'
import PortadaDos from '../component/PortadaDos'
import Coleccion from '../component/Coleccion'
import FotoTexto from '../component/FotoTexto'
import Mensaje from '../component/AgregadoCarrito'

const MainPage = ({  handleAddToCart, showMensaje, nombreProducto, setShowMensaje }) => {
  return (
    <>
      
      <PortadaInicial/>
      <Productos onAddToCart={handleAddToCart}/>
      <PortadaDos onAddToCart={handleAddToCart}/>
      <Coleccion onAddToCart={handleAddToCart}/>
      <FotoTexto onAddToCart={handleAddToCart}/>
      
      {showMensaje && (
        <Mensaje
          mensaje="Agregado al carrito"
          nombreProducto={nombreProducto}
          onClose={() => setShowMensaje(false)}
        />
      )}
    </>
  )
}

export default MainPage