import React, { useState } from 'react'
import img1 from "../img/coconoirchanel.jpg"
import img2 from "../img/sauvagedior.jpg"
import img3 from "../img/yvessaintlaurent.jpg"
import img4 from "../img/gentlemangivenchy.jpg"
import img5 from "../img/mostwantedazzaro.jpg"
import img6 from "../img/pradamilano.jpg"
import img7 from "../img/intensemanclubdenuit.jpg"
import img8 from "../img/chaneln5.jpg"
import img9 from "../img/valentino.jpg"
import img10 from "../img/armani.jpg"
import img11 from "../img/pradablack.jpg"
import img12 from "../img/dolceygabanaking.jpg"
import ItemList from "./ItemList"


const Productos = ({ onAddToCart }) => {



  const productos = [
    { id: 1, name: "Coco Noir CHANEL", price: 560, img: img1 },
    { id: 2, name: "Sauvage DIOR", price: 820, img: img2 },
    { id: 3, name: "Yves Saint Lauren", price: 670, img: img3 },
    { id: 4, name: "Gentleman GIVENCHI", price: 400, img: img4 },
    { id: 5, name: "Most Wanted AZZARO", price: 570, img: img5 },
    { id: 6, name: "Milano PRADA", price: 680, img: img6 },
    { id: 7, name: "Club De Nouit ARMAF CLUB", price: 870, img: img7 },
    { id: 8, name: "Nº 5 CHANEL", price: 500, img: img8 },
    { id: 9, name: "Valentino", price: 700, img: img9 },
    { id: 10, name: "Armani", price: 800, img: img10 },
    { id: 11, name: "Back PRADA", price: 600, img: img11 },
    { id: 12, name: "King D&G", price: 900, img: img12 },
  ]



  return (
    <div id="catalogo">
      <ItemList productos={productos} onAddToCart={onAddToCart} />
    </div>
  )
}

export default Productos
