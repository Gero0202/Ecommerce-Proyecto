import React from 'react'

const Novedades = () => {
  return (
    <div>
      <section className="content-news">
        <p className="text-news">
          Mantente al día con las últimas noticias y lanzamientos de <strong>Exclusive Perfume</strong>.
        </p>
        <div className="news-list">
          <article className="news-item">
            <h2 className="news-title">Nuevo lanzamiento: Fragancia "Eterna Elegancia"</h2>
            <p className="news-description">
              Descubre nuestra última creación, una fragancia que combina notas de vainilla y 
              sándalo para una experiencia inolvidable.
            </p>
          </article>
          <article className="news-item">
            <h2 className="news-title">Evento exclusivo para clientes VIP</h2>
            <p className="news-description">
              Únete a nuestro próximo evento privado donde presentaremos nuestras ediciones limitadas.
            </p>
          </article>
          <article className="news-item">
            <h2 className="news-title">Colaboración especial con diseñadores de lujo</h2>
            <p className="news-description">
              Estamos trabajando con destacados diseñadores para crear una línea de fragancias de lujo.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Novedades
