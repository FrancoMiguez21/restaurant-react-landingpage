import React from 'react'
import SubHeading from '../../SubHeading/SubHeading'
import "./Newsletter.css"
const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter"/>
        <h1 className="headtext__cormorant">Suscríbete A Nuestro Newsletter</h1>
        <p className="p__opensans">No te pierdas de las últimas novedades</p>
      </div>

      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder='Dirección de Email' />
        <button className="custom__button">Enviar</button>
      </div>
    </div>
  )
}

export default Newsletter