import React from 'react'
import { images } from "../../constants"
import "./About.css"

const About = () => {
  return (
   <div className="app__about flex__center section__padding" id="about">

    <div className="app__about-overlay flex__center">
      <img src={images.R}/>
    </div>

    <div className="app__about-content flex__center">
      <div className="app__about-content_about">
        <h1 className="headtext__cormorant">Quienes Somos</h1>
        <img src={images.spoon} />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className="custom__button">Ver Más</button>
      </div>

      <div className="app__about-content_knife flex__center">
        <img src={images.knife}/>
      </div>

      <div className="app__about-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className="custom__button">Ver Más</button>
      </div>

    </div>

   </div>
  )
}

export default About