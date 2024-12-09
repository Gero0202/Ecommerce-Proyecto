import React from 'react'
import imgMedio from "../img/fondo.jpg"

const FotoTexto = () => {
    return (
        <>
            <div id="imagen-medio">
                <img src={imgMedio} alt="Perfume channel"/>
                    <div className="texto-chanel">
                        <p>El Exquisito Perfume de Chanel</p>
                        <p>La elegancia y la distinción están a punto de tomar una nueva forma. En breve, llegará a nuestra tienda el
                            más reciente perfume de Chanel, una fragancia que redefine el lujo y la sofisticación. Con su carácter único
                            y su aura de exclusividad, este perfume está diseñado para quienes buscan lo sublime.</p>

                    </div>
            </div>
        </>
    )
}

export default FotoTexto
