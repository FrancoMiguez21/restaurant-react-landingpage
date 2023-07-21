import React from 'react'

import { images, data } from "../../constants"

import { SubHeading, MenuItem } from "../../components"
import "./Highlights.css"

const Highlights = () => {
  return (
    <div className='app__highlights app__bg flex__center section__padding' id='menu'>
    <div className="app__highlights-title">
      <SubHeading title="Acompaña Tu Comida Con"/>
      <h1 className="headtext__cormorant">Nuestras Especialidades</h1>
    </div>

    <div className="app__highlights-menu">
      <div className="app__highlights-menu_wine flex__center">
        <p className='app__highlights-menu_heading'>Vinos & Cervezas</p>
        <div className="app__highlights-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>
      
      <div className="app__highlights-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__highlights-menu_cocktails flex__center">
        <p className='app__highlights-menu_heading'>Cocktails</p>
        <div className="app__highlights-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
            ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop:"15px" }}>
      <button type='button' className='custom__button'>Ver Más</button>
    </div>
  </div>
  )
}

export default Highlights