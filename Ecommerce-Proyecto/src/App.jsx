import React, {useState} from "react"
import Header from "./component/Header"
import PortadaDos from "./component/PortadaDos"
import PortadaInicial from "./component/PortadaInicial"
import Productos from "./component/Productos"
import Coleccion from "./component/Coleccion"
import FotoTexto from "./component/FotoTexto"
import Footer from "./component/Footer"
import Mensaje from "./component/AgregadoCarrito"



function App() {
  
  
    const [totalItems, setTotalItems] = useState(0)
    const [showMensaje, setShowMensaje] = useState(false)
    
  
    
  const handleAddToCart = (quantity) => {
    setTotalItems((prevTotal) => prevTotal + quantity)
    setShowMensaje(true)
  }

  return (
    <>
      <Header totalItems={totalItems}/>
      <PortadaInicial/>
      <Productos onAddToCart={handleAddToCart}/>
      <PortadaDos onAddToCart={handleAddToCart}/>
      <Coleccion onAddToCart={handleAddToCart}/>
      <FotoTexto onAddToCart={handleAddToCart}/>
      <Footer/>
      {showMensaje && (
        <Mensaje
          mensaje="Agregado al carrito"
          onClose={() => setShowMensaje(false)}
        />
      )}
    </>
  )
}

export default App
