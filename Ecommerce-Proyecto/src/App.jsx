import React, { useState } from "react"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import MainPage from "./pages/MainPage"
import Nosotros from "./pages/Nosotros"
import Contacto from "./pages/Contacto"
import Navegacion from "./pages/Navegacion"
import Novedades from "./pages/Novedades"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DetalleProducto from "./pages/Detalle"

function App() {


  const [totalItems, setTotalItems] = useState(0)
  const [showMensaje, setShowMensaje] = useState(false)
  const [nombreProducto, setNombreProducto] = useState('')


  const handleAddToCart = (quantity, nombreProducto) => {
    setTotalItems((prevTotal) => prevTotal + quantity)
    setNombreProducto(nombreProducto)
    setShowMensaje(true)
  }

  return (
    <>
      <Router>
        <Header />
        <Navegacion totalItems={totalItems} />

        <Routes>
          <Route path="/" element={
            <MainPage
              totalItems={totalItems}
              handleAddToCart={handleAddToCart}
              showMensaje={showMensaje}
              nombreProducto={nombreProducto}
              setShowMensaje={setShowMensaje}
            />
          } />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} /> 
        </Routes>
        <Footer />
      </Router>


    </>
  )
}

export default App
