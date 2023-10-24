import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Performances() {
  return (

    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/performances.png" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' >PERFORMANCES                       </h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>The harmonious fusion of dance and acrobatics has opened doors to a world of breathtaking performances at various events across my country. 
        Below, you'll find a compilation of artistic highlights from some of these extraordinary shows.
        <br></br>
        <br></br>
        My performances are a unique blend of dance and acrobatics, where I showcase my artistry, strength, and flexibility. Each act is a mesmerizing spectacle that brings together different styles and techniques, leaving audiences in awe. From the stage to the streets, my performances have graced various events, offering a visual feast of movement, emotion, and art.
        </p>
        <iframe className='dance_imagen' src="https://www.youtube.com/embed/XNCXxIWyZUg?si=sS4ScQqLqRzPO5PB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <h2 className='titular_galeria'>GALLERY</h2>
      <div className='galeria_imagenes'>
        <img className='galeria_individual' src="/performance/1.png" alt="performance imagen" />
        <img className='galeria_individual' src="/performance/2.png" alt="performance imagen" />
        <img className='galeria_individual' src="/performance/3.png" alt="performance imagen" />
        <img className='galeria_individual' src="/performance/4.png" alt="performance imagen" />
        <img className='galeria_individual' src="/performance/5.png" alt="performance imagen" />
        <img className='galeria_individual' src="/performance/6.png" alt="performance imagen" />
        <img className='galeria_individual' src="/performance/7.png" alt="performance imagen" />
        <img className='galeria_individual' src="/performance/8.png" alt="performance imagen" />
      </div>
      <BackGroundPages />
    </div>

  )

}

export default Performances