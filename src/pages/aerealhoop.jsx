import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Aerealhoop() {
  return (

    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/aerialhoop.png" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' > AERIAL HOOP</h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>The art of Aerial Hoop holds a special place in my heart. I embarked on this journey in the heart of traditional circus life, learning from talented artists from around the world. 
        <br></br><br></br>
        Their guidance and expertise shaped me into the performer I am today. 
        <br></br><br></br>
        Aerial Hoop has become one of my most powerful and captivating acts, featured prominently in various events and circus seasons.
        <br></br><br></br>
        Explore the ethereal world of Aerial Hoop with me, where each spin and pose becomes a breathtaking work of art.</p>
        <iframe className='dance_imagen' src="https://www.youtube.com/embed/-ZIqHCLSGJ0?si=U1ds2RmgiHvhwqUf" title="Aereal Hope video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
      </div>
      <h2 className='titular_galeria'>GALLERY</h2>
      <div className='galeria_imagenes'>
        <img className='galeria_individual' src="/aerial-hoop/1.png" alt="Aerial Hoop Imagen" />
        <img className='galeria_individual' src="/aerial-hoop/2.png" alt="Aerial Hoop Imagen" />
        <img className='galeria_individual' src="/aerial-hoop/3.png" alt="Aerial Hoop Imagen" />
        <img className='galeria_individual' src="/aerial-hoop/4.png" alt="Aerial Hoop Imagen" />
        <img className='galeria_individual' src="/aerial-hoop/5.png" alt="Aerial Hoop Imagen" />
        <img className='galeria_individual' src="/aerial-hoop/6.png" alt="Aerial Hoop Imagen" />
        <img className='galeria_individual' src="/aerial-hoop/7.png" alt="Aerial Hoop Imagen" />
        <img className='galeria_individual' src="/aerial-hoop/8.png" alt="Aerial Hoop Imagen" />
      </div>
      <BackGroundPages />
    </div>

  )

}

export default Aerealhoop