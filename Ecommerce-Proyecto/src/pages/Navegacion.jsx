import React from 'react'
import imgLogo from "../img/logo.jpg"
import { Link } from 'react-router-dom'

const Navegacion = ({ totalItems }) => {
    return (
        <>
            <nav>
                <ul>
                    <li id="logo"><Link to="/"><img src={imgLogo} /></Link></li>
                    <li><Link to="/nosotros">ACERCA DE NOSOTROS</Link></li>
                    <li><Link to="/contacto">CONTACTO</Link></li>
                    <li><Link to="/novedades">NOVEDADES</Link></li>
                    <li>
                        <div id="carrito" className="carrito-container">
                        <Link to="/carrito"> 
                            <i className="fa-solid fa-cart-shopping"></i>
                            {totalItems > 0 && (
                                <span className="cart-count">{totalItems}</span>
                            )}
                        </Link>    
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navegacion
