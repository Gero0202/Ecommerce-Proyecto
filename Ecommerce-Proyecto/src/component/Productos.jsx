import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList"
import  useFetch  from '../Hook/useFetch.jsx'
import { useCart } from '../context/CartContext.jsx'
import Loading from "./Loading.jsx"


const Productos = () => {

  const { data, loading, error } = useFetch("productos")
  const { addToCart } = useCart()

  

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div id="catalogo">
          <ItemList productos={data} onAddToCart={addToCart} />
        </div>
      )}
    </>
  );
}

export default Productos
