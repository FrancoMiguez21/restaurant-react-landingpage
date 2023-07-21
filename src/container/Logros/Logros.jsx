import React from 'react'
import { SubHeading } from "../../components"
import { images, data } from "../../constants"
import "./Logros.css"

const AwardCard = ({award: {imgUrl, title, subtitle}}) => {
  return(
    <div className="app__logros_awards-card">
      <img src={imgUrl} alt="" />
      <div className="app__logros_awards-card_content">
        <p className="p__cormorant" style={{color:"#dcca87"}}>{title}</p>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  )
}
const Logros = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="logros">
      <div className="app__wrapper_info">
        <SubHeading title="Premios & Reconocimientos"/>
        <h1 className="headtext__cormorant">
          Nuestros Logros
        </h1>
        <div className="app__logros_awards">
          {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.logros} alt="" />
      </div>
    </div>
  )
}

export default Logros