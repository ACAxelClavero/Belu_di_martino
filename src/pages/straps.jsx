import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Straps() {
  return (

    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/straps.png" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' >AERIAL STRAPS                   </h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>Aerial Straps is not just a discipline but a captivating art form that I have mastered both as a soloist and in mesmerizing duet performances. 
        
        One of the highlights of my journey in this aerial realm was my recent collaboration with the renowned Vangart. 
    
        Together, we graced the stages of Rosario and the iconic Corrientes Avenue in Buenos Aires - Argentina, led by the expert guidance of directors Sean McKeown, Damian Mahler, and Diego Castro.
        <br></br><br></br>
        Experience the aerial world of Aerial Straps with me, where I push the boundaries of physicality and artistry to create stunning, gravity-defying performances.</p>
        <iframe className='dance_imagen' src="https://www.youtube.com/embed/WVp9ymh9DjU?si=I5hdRbZ0VV7GRGkO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <h2 className='titular_galeria'>GALLERY</h2>
      <div className='galeria_imagenes'>
        <img className='galeria_individual' src="/straps/1.png" alt="straps imagen" />
        <img className='galeria_individual' src="/straps/2.png" alt="straps imagen" />
        <img className='galeria_individual' src="/straps/3.png" alt="straps imagen" />
        <img className='galeria_individual' src="/straps/4.png" alt="straps imagen" />
        <img className='galeria_individual' src="/straps/5.png" alt="straps imagen" />
        <img className='galeria_individual' src="/straps/2.png" alt="straps imagen" />
        <img className='galeria_individual' src="/straps/1.png" alt="straps imagen" />
        <img className='galeria_individual' src="/straps/5.png" alt="straps imagen" />
      </div>
      <BackGroundPages />
    </div>

  )

}

export default Straps