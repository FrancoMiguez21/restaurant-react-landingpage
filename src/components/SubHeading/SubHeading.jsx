import React from 'react'
import { images } from "../../constants"
import "./SubHeading.css"
const SubHeading = ({title}) => {
  return (
    <div style={{maringBottom: "1rem"}}>
      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} className='spoon__img'/>
      </div>
  )
}

export default SubHeading