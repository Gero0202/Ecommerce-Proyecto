import React from 'react'
import imgPortada from "../img/perfumeportada.jpg"

const PortadaInicial = () => {
  return (
    <>
      <div id="rolex-portada">
        <img src={imgPortada} alt="rolex-portada"/>
        <div>
            <p className="titulo-portada"> Nueva Colección de Chanel</p>

            <p className="descripcion-portada">Chanel presenta su nueva colección de perfumes, una celebración de la
                elegancia atemporal y la sofisticación. Cada fragancia, una obra maestra de la perfumería, captura la
                esencia de la feminidad y el lujo, ofreciendo una experiencia sensorial única. Descubre la distinción y
                belleza en cada nota.</p>
        </div>
    </div>

    </>
  )
}

export default PortadaInicial
