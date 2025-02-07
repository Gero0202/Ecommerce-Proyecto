import React,  { useEffect } from 'react';

const Mensaje = ({ mensaje, onClose }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          onClose();
        }, 3000);
    
        return () => clearTimeout(timer);
      }, [onClose]);

  return (
    <div className="mensaje">
      <p>{mensaje}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Mensaje;