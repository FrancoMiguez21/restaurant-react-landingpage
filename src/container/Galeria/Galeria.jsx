import React, {useRef} from 'react'
import { SubHeading } from "../../components"
import { images } from "../../constants"
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import "./Galeria.css"
const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
const Galeria = () => {
  const scrollRef = useRef(null)

  const scroll = ( direction ) => {
    const { current } = scrollRef;

    if (current) {
      direction === "left" ? (current.scrollLeft -= 300) : (current.scrollLeft += 300);
    }
  };

  return (
   <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="Instagram"/>
      <h1 className="headtext__cormorant">Galeria de Fotos</h1>
      <p className="p__opensans" style={{color:"#AAA", marginTop:"2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button className="custom__button">Ver Más</button>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {galleryImages.map((image, index) => (
          <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
            <img src={image} />
            <BsInstagram className='gallery__image-icon'/>
          </div>
        ))}
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll("left")} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll("right")} />
      </div>
    </div>
   </div>
  )
}

export default Galeria