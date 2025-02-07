import React, { useState } from "react"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import MainPage from "./pages/MainPage"
import Nosotros from "./pages/Nosotros"
import Contacto from "./pages/Contacto"
import Navegacion from "./pages/Navegacion"
import Novedades from "./pages/Novedades"
import Carrito from "./pages/Carrito"
import AgregadoCarrito from "./component/AgregadoCarrito"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DetalleProducto from "./pages/Detalle"
import {  useCart } from "./context/CartContext"
import Mensaje from "./component/MensajeStock"

function App() {

   const { totalItems, showMensaje, nombreProducto, setShowMensaje, sinStock, setSinStock } = useCart()

  return (
    
     
      <Router>
        <Header />
        
        <Navegacion totalItems={totalItems} />

        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} /> 
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} /> 
        </Routes>
        <Footer />
        
        {showMensaje && (
          <AgregadoCarrito
            mensaje="Producto agregado al carrito"
            nombreProducto={nombreProducto}
            onClose={() => setShowMensaje(false)}
          />
        )}
        {sinStock && (
          <Mensaje
            mensaje="Sin stock"
            onClose={() => setSinStock(false)}
          />
        )}
      </Router>
      


    
  )
}



export default App
