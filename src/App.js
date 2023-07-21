import React from 'react'
import { Navbar } from './components'
import { About, Chef, Contacto, Footer, Galeria, Hero, Highlights, Logros, Video } from './container'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Highlights/>
            <About/>
            <Chef/>
      <Video/>
      <Logros/>
      <Galeria/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default App