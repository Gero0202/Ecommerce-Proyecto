import React from 'react'
import { useParams } from 'react-router-dom'
import img1 from '../img/coconoirchanel.jpg'
import img2 from '../img/sauvagedior.jpg'
import img3 from '../img/yvessaintlaurent.jpg'
import img4 from '../img/gentlemangivenchy.jpg'
import img5 from '../img/mostwantedazzaro.jpg'
import img6 from '../img/pradamilano.jpg'
import img7 from '../img/intensemanclubdenuit.jpg'
import img8 from '../img/chaneln5.jpg'
import img9 from '../img/valentino.jpg'
import img10 from '../img/armani.jpg'
import img11 from '../img/pradablack.jpg';
import img12 from '../img/dolceygabanaking.jpg';

const productos = [
    { id: 1, name: "Coco Noir CHANEL", price: 560, img: img1, description: " Una fragancia nocturna y cautivadora que mezcla notas amaderadas, especiadas y un toque floral suave. Ideal para mujeres sofisticadas que desean un perfume elegante, con una esencia que evoca misterio y lujo. Perfecto para cenas y eventos formales." },
    { id: 2, name: "Sauvage DIOR", price: 820, img: img2, description: "Inspirada en la naturaleza salvaje y los paisajes abiertos, esta fragancia combina notas frescas de bergamota y pimienta con un fondo amaderado y terroso. Diseñada para hombres libres y seguros de sí mismos, es ideal tanto para el día como para la noche." },
    { id: 3, name: "Yves Saint Lauren", price: 670, img: img3, description: "Un perfume icónico que mezcla notas especiadas como la pimienta negra con acordes florales de lavanda y vainilla, creando una fragancia equilibrada entre lo clásico y lo moderno. Perfecto para quienes buscan elegancia y sofisticación en su día a día." },
    { id: 4, name: "Gentleman GIVENCHI", price: 400, img: img4, description: "Una fragancia que redefine la masculinidad clásica, combinando notas de cuero, pachulí y especias, con un toque floral inesperado. Es perfecta para hombres que desean proyectar confianza, elegancia y sofisticación en cualquier ocasión." },
    { id: 5, name: "Most Wanted AZZARO", price: 570, img: img5, description: "Una fragancia cálida y seductora que mezcla especias dulces como la vainilla y la canela con un fondo amaderado. Diseñada para aquellos que desean destacar con un aroma único y memorable. Ideal para noches especiales." },
    { id: 6, name: "Milano PRADA", price: 680, img: img6, description: "Este perfume combina la frescura de las notas cítricas con un fondo amaderado y ligeramente especiado, evocando la sofisticación del estilo italiano. Perfecto para hombres modernos que buscan un aroma versátil para cualquier ocasión." },
    { id: 7, name: "Club De Nouit ARMAF CLUB", price: 870, img: img7, description: "Una fragancia intensa que abre con notas frutales de manzana y bergamota, evolucionando hacia un corazón floral y un fondo amaderado y ahumado. Ideal para ocasiones formales donde se busca causar una impresión duradera." },
    { id: 8, name: "Nº 5 CHANEL", price: 500, img: img8, description: "Este clásico eterno combina notas florales de jazmín, rosa y ylang-ylang con un toque aldehídico que lo convierte en el epítome del lujo. Perfecto para mujeres sofisticadas que buscan un aroma atemporal para cualquier momento del día." },
    { id: 9, name: "Valentino", price: 700, img: img9, description: "Con una apertura fresca de bergamota y menta, este perfume evoluciona hacia un corazón cálido de especias y un fondo amaderado. Diseñado para hombres que desean reflejar pasión y estilo italiano en cada momento." },
    { id: 10, name: "Armani", price: 800, img: img10, description: "Una fragancia que combina la frescura de la bergamota con notas amaderadas y terrosas, creando un aroma equilibrado y sensual. Ideal para hombres que buscan un perfume versátil para el día y la noche." },
    { id: 11, name: "Back PRADA", price: 600, img: img11, description: "Este perfume es una mezcla de frescura aromática y calidez especiada, perfecta para hombres que desean un aroma refinado y moderno. Su versatilidad lo hace ideal tanto para el trabajo como para eventos sociales." },
    { id: 12, name: "King D&G", price: 900, img: img12, description: "Una fragancia audaz y carismática que combina notas aromáticas de albahaca y salvia con un fondo amaderado. Diseñada para hombres que desean sentirse como reyes en cualquier situación, es perfecta para el día o la noche." },
   
]


const DetalleProducto = () => {

    const { id } = useParams()
    const product = productos.find(p => p.id === parseInt(id))

    return (
        <div className="detalle-container">
            <h1>{product.name}</h1>
            <img src={product.img} />
            <p className="price">Precio: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default DetalleProducto
