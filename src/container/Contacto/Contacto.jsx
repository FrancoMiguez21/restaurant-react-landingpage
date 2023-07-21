import React from 'react'
import { SubHeading } from '../../components'
import { images } from "../../constants"

const Contacto = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contacto"/>
        <h1 className="headtext__cormorant" style={{marginBottom:"3rem"}}>Vení A Visitarnos</h1>
        <div className="app__wrapper-contant">
          <p className="p__opensans">Nombre Calle 123, Zona, Ciudad, CP1234</p>
          <p className="p__cormorant" style={{color:"#DCCA87", margin: "2rem 0" }}>Horario De Atención</p>
          <p className="p__opensans">Lun - Vie: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sab - Dom: 10:00 am - 03:00 am</p>
      </div>
      <button className="custom__button" style={{marginTop:"2rem"}}>Ver Más</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.splash} />
      </div>
    </div>
  )
}

export default Contacto