import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Teacher() {
  return (
    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/teacher.png" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' > TEACHER                 </h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>One of my greatest passions is teaching. I started at the age of 18, conducting workshops and seminars covering various styles of dance and aerial acrobatics. However, my true motivation has always been a social one – creating safe and inclusive spaces where everyone can dance comfortably, freely, and in a community of like-minded individuals. These workshops have always been named "BDM," and they've been one of the most beautiful aspects of my life's work. It's not just about the activities we share but the incredible people and communities that have formed around them.</p>
        <iframe className='dance_imagen' src="https://www.youtube.com/embed/FcrC2gxxTaU?si=5cGHp6T--OSSqVDl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>
      <h2 className='titular_galeria'>GALLERY</h2>
      <div className='galeria_imagenes'>
        <img className='galeria_individual' src="/teacher/1.png" alt="dance imagen" />
        <img className='galeria_individual' src="/teacher/2.png" alt="dance imagen" />
        <img className='galeria_individual' src="/teacher/3.png" alt="dance imagen" />
        <img className='galeria_individual' src="/teacher/4.png" alt="dance imagen" />
        <img className='galeria_individual' src="/teacher/5.png" alt="dance imagen" />
        <img className='galeria_individual' src="/teacher/6.png" alt="dance imagen" />
        <img className='galeria_individual' src="/teacher/7.png" alt="dance imagen" />
        <img className='galeria_individual' src="/teacher/8.png" alt="dance imagen" />
      </div>
      <BackGroundPages />
    </div>

  )

}

export default Teacher