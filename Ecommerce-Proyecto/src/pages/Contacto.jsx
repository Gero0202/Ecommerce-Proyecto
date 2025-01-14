import React from 'react'

const Contacto = () => {
  return (
    <div className="contact-container">
        <h1>CONTACTANOS</h1>
       <section className="content-contact">
        <p className="text-contact">
          ¿Tenes alguna pregunta o necesitas ayuda? ¡Nos encantaria saber de vos!
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </section>
    </div>
  )
}

export default Contacto
