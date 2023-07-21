import React from 'react'
import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"
import { images } from "../../constants"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay/>
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contacto</h1>
          <p className="p__opensans">Nombre Calle 123, Zona, Ciudad, CP1234</p>
          <p className="p__opensans">+12 1234 1234</p>
          <p className="p__opensans">+12 1234 1234</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.restaurant} alt="" />
          <p className="p__opensans">La mejor forma de encontrarse a uno mismo es perdiéndose en el servicio de otros.</p>
          <img src={images.spoon} className='spoon__img' style={{ marginTop:"15px" }} alt="" />
          <div className="app__footer-links_icons">
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
          </div>
        </div>
        <div className="app__footer-links_work">
            <h1 className="app__footer-headtext">Horario De Atención</h1>
            <p className="p__opensans">Lunes-Viernes:</p>
            <p className="p__opensans">08:00 am -12:00 am</p>
            <p className="p__opensans">Sábado-Domingo:</p>
            <p className="p__opensans">07:00am -11:00 pm</p>
</div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2023 Restaurant</p>
      </div>
    </div>
  )
}

export default Footer