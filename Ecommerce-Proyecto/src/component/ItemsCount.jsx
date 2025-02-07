import React, { useState } from 'react'
import styles from "../service/style.js"

const ItemsCounts = ({ stock , inicial , onAdd }) => {
  const [count, setCount] = useState(inicial)

 
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }


  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  
  const handleAddToCart = () => {
    onAdd(count)
  }

  return (
    <div style={styles.container}>
      
      <div style={styles.buttonsContainer}>
        <button
          style={{
            ...styles.button,
            ...(count === 1 ? styles.disabledButton : {}),
          }}
          onClick={handleDecrement}
          disabled={count === 1}>
          -
        </button>

        <span style={styles.counterDisplay}>{count}</span>

        <button
          style={{
            ...styles.button,
            ...(count === stock ? styles.disabledButton : {}),
          }}
          onClick={handleIncrement}
          disabled={count === stock}>
          +
        </button>
      </div>

      <button
        style={styles.addButton}
        onClick={handleAddToCart}
        disabled={count === 0}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemsCounts
