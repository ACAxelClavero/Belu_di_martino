import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Modeling() {
  return (
    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/modeling.png" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' >MODELING                        </h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>In the world of modeling, I uncover a unique passion for artistic expression. Each session is a canvas where I blend fashion and authenticity, creating captivating visual stories.
<br></br><br></br>
I explore diverse styles, from high fashion to contemporary elegance, aiming to convey emotions through each image. Modeling allows me to challenge boundaries and transform reality into art.
<br></br><br></br>
Discover my portfolio for a journey of self-discovery and artistic beauty, where every photo tells a story.</p>
        <iframe className='dance_imagen' src="https://www.youtube.com/embed/VWGK3wO33Gw?si=kWYORPiX2MXZZWan" title="Modeling video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <h2 className='titular_galeria'>GALLERY</h2>
      <div className='galeria_imagenes'>
        <img className='galeria_individual' src="/modeling/1.png" alt="modeling imagen" />
        <img className='galeria_individual' src="/modeling/2.png" alt="modeling imagen" />
        <img className='galeria_individual' src="/modeling/3.png" alt="modeling imagen" />
        <img className='galeria_individual' src="/modeling/4.png" alt="modeling imagen" />
        <img className='galeria_individual' src="/modeling/5.png" alt="modeling imagen" />
        <img className='galeria_individual' src="/modeling/6.png" alt="modeling imagen" />
        <img className='galeria_individual' src="/modeling/7.png" alt="modeling imagen" />
        <img className='galeria_individual' src="/modeling/8.png" alt="modeling imagen" />
      </div>
      <BackGroundPages />
    </div>

  )

}

export default Modeling