import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Poledance() {
  return (

    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/pole-dance.png" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' >POLE DANCE                    </h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>I am a certified Pole Dance instructor. I began my training under the guidance of Barbara Regenardt and continued to expand my skills by attending workshops at various studios across the country. I've completed instructor programs at Training Shoes, covering beginner, intermediate, and advanced levels, all under the guidance of the accomplished teacher Belen Serra.
<br></br><br></br>
Today, I bring a unique fusion of Pole Dance and a touch of Straps to create a captivating performance that blends the artistry of circus and dance in a mesmerizing Pole Straps routine.</p>
<iframe className='dance_imagen' src="https://www.instagram.com/p/CN6HvIxHsPY/embed/"  frameBorder="0"  scrolling="no"></iframe>
      </div>
      <h2 className='titular_galeria'>GALLERY</h2>
      <div className='galeria_imagenes'>
        <img className='galeria_individual' src="/pole-dance/1.png" alt="pole dance imagen" />
        <img className='galeria_individual' src="/pole-dance/2.png" alt="pole dance imagen" />
        <img className='galeria_individual' src="/pole-dance/3.png" alt="pole dance imagen" />
        <img className='galeria_individual' src="/pole-dance/4.png" alt="pole dance imagen" />
        <img className='galeria_individual' src="/pole-dance/5.png" alt="pole dance imagen" />
        <img className='galeria_individual' src="/pole-dance/1.png" alt="pole dance imagen" />
        <img className='galeria_individual' src="/pole-dance/2.png" alt="pole dance imagen" />
        <img className='galeria_individual' src="/pole-dance/3.png" alt="pole dance imagen" />
      </div>
      <BackGroundPages />
    </div>

  )

}

export default Poledance