import React from 'react'
import PortadaInicial from '../component/PortadaInicial'
import Productos from '../component/Productos'
import PortadaDos from '../component/PortadaDos'
import Coleccion from '../component/Coleccion'
import FotoTexto from '../component/FotoTexto'
import Mensaje from '../component/AgregadoCarrito'

const MainPage = () => {
  return (
    <>
      
      <PortadaInicial/>
      <Productos />
      <PortadaDos />
      <Coleccion />
      <FotoTexto />
      
      
    </>
  )
}

export default MainPage