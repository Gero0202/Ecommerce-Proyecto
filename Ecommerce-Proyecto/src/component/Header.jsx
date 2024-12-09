import React from 'react'
import imgLogo from "../img/logo.jpg"

const Header = ({ totalItems }) => {
  return (
    <>
    <header>
     <div id="barra-navegacion">
         <h1 id="titulo-principal">Exclusive Perfume</h1>
            <nav>
            <ul>
            <li id="logo"><a href="./index.html"><img src={imgLogo}/></a></li>
            <li><a href="">ACERCA DE NOSOTROS</a></li>
            <li><a href="">CONTACTO</a></li>
            <li><a href="">NOVEDADES</a></li>
            <li>
                <div id="carrito" className="carrito-container">
                    <i className="fa-solid fa-cart-shopping"></i>
                    {totalItems > 0 && (
                    <span className="cart-count">{totalItems}</span>
                  )}
                </div>
            </li>
            </ul>
            </nav>
     </div>
     </header>
    </>
  )
}

export default Header
