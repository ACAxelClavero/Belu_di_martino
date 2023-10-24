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
        <p className='parrafo'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las</p>
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