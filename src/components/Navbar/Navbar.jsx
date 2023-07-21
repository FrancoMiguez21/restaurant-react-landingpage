import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import { images } from "../../constants"
import "./Navbar.css"
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.restaurant} />
        </div>
        <ul className="app__navbar-links">
            <li className="p__opensans"><a href="#home">Inicio</a></li>
            <li className="p__opensans"><a href="#menu">Menu</a></li>
            <li className="p__opensans"><a href="#about">Nosotros</a></li>
            <li className="p__opensans"><a href="#logros">Logros</a></li>
            <li className="p__opensans"><a href="#contact">Contacto</a></li>
        </ul>
        <div className="app__navbar-login">
            <a href="#login" className="p__opensans">Log in / Registrate</a>
            <div/>
            <a href="/" className="p__opensans">Hacer Reserva</a>
        </div>

        <div className="app__navbar-smallscreen">
            <GiHamburgerMenu color="#ffffff" fontSize={27} onClick={() => {setToggleMenu(true)}}/>

            {toggleMenu && (

           
            <div className="app__navbar-smallscreen_overlay flex__center slide bottom">
                <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                <ul className="app__navbar-smallscreen_links">
                    <li className="p__opensans"><a href="#home">Inicio</a></li>
                    <li className="p__opensans"><a href="#menu">Menu</a></li>
                    <li className="p__opensans"><a href="#about">Nosotros</a></li>
                    <li className="p__opensans"><a href="#logros">Logros</a></li>
                    <li className="p__opensans"><a href="#contact">Contacto</a></li>
                </ul>
            </div>
             )}
        </div>
    </div>
    
  )
}

export default Navbar