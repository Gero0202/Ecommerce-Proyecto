import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useCart } from "../context/CartContext";
import { db } from "../config/firebaseConfig";

const Cart = () => {
  const { cart, removeFromCart, cleanCart, getTotal, decreaseQuantity, increaseQuantity } = useCart();
  const [compraConfirmada, setCompraConfirmada] = useState(false)
  const [detalleCompra, setDetalleCompra] = useState([]) 
  const [idCompra, setIdCompra] = useState('')

  
  const confirmarCompra = async () => {
    try {
      const comprasRef = collection(db, "compra");

      const docRef = await addDoc(comprasRef, {
        comprador: {
          nombre: "Cliente Ecommerce", 
          telefono: "123457", 
          email: "cliente@generico.com" 
        },
        cart,
        total: getTotal() ?? "0",
        fecha: new Date().toISOString(),
      });

      setDetalleCompra(cart)
      setIdCompra(docRef.id)
      setCompraConfirmada(true)
      cleanCart(); 
      console.log("Documento agregado con ID:", docRef.id);
    } catch (e) {
      console.error("Error al agregar documento:", e);
    }
  };

  return (
    <div className="cart">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Carrito de compras</h2>
      {compraConfirmada ? (
        <div className="detalle-compra">
          <h3>Detalle de la compra:</h3>
          <h2>ID de la compra: {idCompra}</h2>
          <ul className="cart-list">
            {detalleCompra.map((item) => (
              <li key={item.id} className="cart-item">
                <span>
                  {item.name} - {item.quantity} x ${item.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${detalleCompra.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
          </div>
        </div>
      ) : (
        <>
          {cart.length === 0 ? (
            <p style={{ textAlign: "center" }}>El carrito está vacío.</p>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <span>
                      {item.name} - {item.quantity} x ${item.price}
                    </span>
                    <div className="cart-buttons">
                      <button className="cart-button" onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                      <button className="cart-button" onClick={() => removeFromCart(item.id)}>
                        X
                      </button>
                      <button className="cart-button" onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <p>Total: ${getTotal()}</p>
                <button className="boton-comprar" onClick={confirmarCompra}>
                  Comprar
                </button>
              </div>
              <div className="clean-cart-buttons">
                <button onClick={cleanCart}>
                  Vaciar carrito
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Cart;
