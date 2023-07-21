import React from 'react'
import { images } from "../../constants"

import "./Hero.css"
import { SubHeading } from '../../components'

const Hero = () => {
  return (
    <div className="app__hero app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Persigue El Nuevo Sabor"/>
        <h1 className='app__hero-h1'>Bienvenidos al Restaurante</h1>
        <p className='p__opensans' style={{margin:"2rem 0"}}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
        </p>
        <button className="custom__button">Explorar Menú</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.heroimg}/>
      </div>
    </div>
  )
}

export default Hero