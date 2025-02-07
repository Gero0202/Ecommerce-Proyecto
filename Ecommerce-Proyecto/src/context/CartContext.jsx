import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../config/firebaseConfig";

const CartContext = createContext();


export const CartProvider = ({ children }) => {
 
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [showMensaje, setShowMensaje] = useState(false);
  const [nombreProducto, setNombreProducto] = useState('');
  const [sinStock , setSinStock] = useState(false)

  const verificarStock = async (collectionName, productId, quantity) => {
    try {

      const q = query(collection(db, collectionName), where("id", "==", productId))
      const querySnapshot = await getDocs(q)
     

      if (querySnapshot.empty) {
        return false;
      }
  
      const productData = querySnapshot.docs[0].data();
  
      if (typeof productData.stock !== "number") {
        return false;
      }

      return productData.stock >= quantity;
    } catch (error) {
      console.error(`Error verificando stock en ${collectionName}:`, error);
      return false;
    }
  };

  const addToCart = async (product) => {
    
    const colecciones = ["productos", "coleccion", "unicoProducto"];
    let stockDisponible = false;

    for (const coleccion of colecciones) {
      stockDisponible = await verificarStock(coleccion, product.id, product.quantity);
      if (stockDisponible) break;
    }

    if (!stockDisponible) {
      setSinStock(true); 
      return;
    }




    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(
          (item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + product.quantity } 
              : item 
        );
      }
      return [...prevCart, { ...product, quantity: product.quantity }];
    });
    setTotalItems((prevTotal) => prevTotal + product.quantity);
    setNombreProducto(product.name);
    setShowMensaje(true);
  };

  const removeFromCart = (id) => {
    const productToRemove = cart.find((item) => item.id === id);
    if (productToRemove) {
      setTotalItems((prevTotal) => prevTotal - productToRemove.quantity);
    }
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cleanCart = () => {
    setCart([]);
    setTotalItems(0);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) 
    );
    setTotalItems((prevTotal) => prevTotal - 1);
  };

  
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setTotalItems((prevTotal) => prevTotal + 1);
  };

 
  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        showMensaje,
        nombreProducto,
        addToCart,
        removeFromCart,
        cleanCart,
        getTotal,
        decreaseQuantity,
        increaseQuantity,
        setShowMensaje,
        setSinStock,
        sinStock,
      }}
    >
      {children} 
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);







