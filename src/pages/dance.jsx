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
        <div className='cardBox'>
          <p className='parrafo'>Dance has always been my first love within the world of art, and it's a fundamental part of all my aerial performances. I consider myself a versatile dancer, capable of seamlessly adapting to a wide range of dance styles, from urban and contemporary to technical precision. In my videos, you'll witness the beauty of various dance forms, including but not limited to:
            <br></br>
            <strong>Femme Style</strong>
            <br></br>
            <strong>Contemporary Dance</strong>
            <br></br>
            <strong>Jazz</strong>
            <br></br>
            <strong>Urban Dance</strong>
            <br></br>
            <strong>Acrodance</strong>
            <br></br>
            <strong>Heels</strong>
            <br></br>
            <strong>Street Dance</strong>
            <br></br>
            <strong>Lyrical Jazz</strong>
            <br></br><br></br>
            My dance journey has been a beautiful exploration of movement and expression. I invite you to explore my world of dance through these videos, each a testament to the vibrant, versatile, and passionate artist I am.
          </p>
        </div>
        <img className='dance_imagen' src="/galeria1_dance.PNG" alt="dance imagen" />
      </div>
      <div className='contenedor'>

        <h2 className='titular_galeria'>GALLERY</h2>
        <div className='galeria_imagenes'>
          <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
          <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
          <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
          <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
          <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
          <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
          <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
          <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
        </div>
      </div>
      <BackGroundPages />
    </div>

  )

}

export default Dance