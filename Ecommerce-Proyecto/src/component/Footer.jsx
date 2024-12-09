import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h2>Exclusive Perfume</h2>
                        <p>Elegancia y sofisticación en cada fragancia.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Enlaces Rápidos</h3>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Acerca de Nosotros</a></li>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contacto</h3>
                        <p>Email: contacto@exclusiveperfume.com</p>
                        <p>Teléfono: +123 456 7890</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Exclusive Perfume. Todos los derechos reservados.</p>
                </div>



            </footer>
        </>
    )
}

export default Footer
