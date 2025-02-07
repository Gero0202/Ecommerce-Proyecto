import React, { useState, useEffect } from 'react'
import { db } from "../config/firebaseConfig"
import productos from "../service/constantes"
import coleccion from "../service/coleccion"
import unicoProducto from "../service/unicoProducto"
import { addDoc, collection, doc, getDocs, query, updateDoc, where, writeBatch } from 'firebase/firestore'
import { useUser } from '../context/UserContext'



const Header = () => {

  const { user, login, logout } = useUser()
  


  const cargarProductos = async () => {
    try {
      const batch = writeBatch(db);
  
      const productosRef = collection(db, "productos");
      productos.forEach((product) => {
        const newDoc = doc(productosRef);
        batch.set(newDoc, product);
      });
  
      const coleccionRef = collection(db, "coleccion");
      coleccion.forEach((product) => {
        const newDoc = doc(coleccionRef);
        batch.set(newDoc, product);
      });
  
      const unicoProductoRef = collection(db, "unicoProducto");
      unicoProducto.forEach((product) => {
        const newDoc = doc(unicoProductoRef);
        batch.set(newDoc, product);
      });
  
      await batch.commit();
      console.log("Productos cargados exitosamente en Firestore");
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  };


  const deleteAllProducts = async () => {
    try {
      const batch = writeBatch(db);
  
      const collections = ["productos", "coleccion", "unicoProducto"];
  
      for (const collectionName of collections) {
        const collectionRef = collection(db, collectionName);
        const snapshot = await getDocs(collectionRef);
  
        snapshot.forEach((docSnap) => {
          batch.delete(docSnap.ref);
        });
      }
  
      await batch.commit();
      console.log("Todos los productos han sido eliminados de Firestore.");
    } catch (error) {
      console.error("Error al eliminar los productos:", error);
    }
  }; 
  


  const handleLoginLogout = () => {
    if (user?.isLoggedIn) {
      logout();
      console.log("Usuario deslogueado");
    } else {
      login({ name: "Admin!", isLoggedIn: true });
      console.log("Usuario logueado");
    }
  };


  return (
    <>
      <header>

        <button
          onClick={handleLoginLogout}
          style={{
            position: "absolute",
            top: "41px",
            left: "10px",
            padding: "10px 20px",
            background: user?.isLoggedIn ? "red" : "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {user?.isLoggedIn ? "Logout" : "Login"}
        </button>

        <div id="barra-navegacion">
          <h1 id="titulo-principal">Exclusive Perfume</h1>
        </div>
        {user?.isLoggedIn && (
          <>
            <p
              style={{
                textAlign: "center",
                color: "green",
                marginTop: "10px",
              }}
            >
              {`Bienvenido, ${user.name}`}
            </p>
            <button
              onClick={cargarProductos}
              style={{
                margin: "5px",
                padding: "10px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cargar a Firestore
            </button>
            <button
              onClick={deleteAllProducts}
              style={{
                margin: "5px",
                padding: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Borrar todos los Productos a Firestore
            </button>
          </>
        )}

        {/* {!productosCargados && (
          <p
            style={{
              textAlign: "center",
              color: "red",
              marginTop: "10px",
            }}
          >
            Necesita cargar los productos.
          </p>
        )} */}
        {/* {productosCargados === null ? (
        <p style={{ textAlign: "center", color: "blue", marginTop: "10px" }}>
          Cargando productos...
        </p>
      ) : !productosCargados ? (
        <p style={{ textAlign: "center", color: "red", marginTop: "10px" }}>
          Necesita cargar los productos.
        </p>
      ) : (
        <p style={{ textAlign: "center", color: "green", marginTop: "10px" }}>
          Productos cargados correctamente.
        </p>
      )} */}

      </header>
    </>
  )
}

export default Header
