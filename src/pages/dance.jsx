import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'

function Dance() {
  return (

    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/carrusel_dance2.jpg" alt="dance banner" />

        <h1 className='titular scale-up-horizontal-center' >DANCE</h1>

      </div>
      <div className='flex_contenedor'>
        
          <p className='parrafo'>Dance has always been my first love within the world of art, and it's a fundamental part of all my aerial performances. I consider myself a versatile dancer, capable of seamlessly adapting to a wide range of dance styles, from urban and contemporary to technical precision. In my videos, you'll witness the beauty of various dance forms, including but not limited to:
            <br></br>
            <center><strong>Femme Style</strong>, 
            <strong>Contemporary Dance</strong>
            <br></br><strong>Jazz</strong>, 
            <strong>Urban Dance</strong>
            <br></br><strong>Acrodance</strong>, 
            <strong>Heels</strong>
            <br></br><strong>Street Dance</strong>, 
            <strong>Lyrical Jazz</strong></center>
            I invite you to explore my world of dance through these videos, each a testament to the vibrant, versatile, and passionate artist I am.
          </p>
        
          <iframe className='dance_imagen' src="https://www.youtube.com/embed/hN1QUlO76Sw?si=d3mxRp3lJpHpnbMm" title="Dance video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </div>
      <div className='contenedor'>

        <h2 className='titular_galeria'>GALLERY</h2>
        <div className='galeria_imagenes'>
          <img className='galeria_individual' src="/dance/1.png" alt="dance imagen" />
          <img className='galeria_individual' src="/dance/2.png" alt="dance imagen" />
          <img className='galeria_individual' src="/dance/3.png" alt="dance imagen" />
          <img className='galeria_individual' src="/dance/4.png" alt="dance imagen" />
          <img className='galeria_individual' src="/dance/5.png" alt="dance imagen" />
          <img className='galeria_individual' src="/dance/6.png" alt="dance imagen" />
          <img className='galeria_individual' src="/dance/7.png" alt="dance imagen" />
          <img className='galeria_individual' src="/dance/8.png" alt="dance imagen" />
        </div>
      </div>
      <BackGroundPages />
    </div>

  )

}

export default Dance