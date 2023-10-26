import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../../styles/footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {

  const handleContactClick = () => {
    
    // Llevar la página a la parte superior
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">

      <Link to="/">

        <img className='imagen' onClick={handleContactClick} src="/bdmlogo.png" alt="Logo" /> </Link>
      <div className='text'>
        <p>Belen Di Martino</p>
      </div>
      <div  className='centerButton'>
      <Link to="/contact" onClick={handleContactClick} className="contact-button">Contact</Link>

      </div>
      <div className='icons'>
        <a href="https://www.instagram.com/beluudimartino/" target='_blank'>
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@belendimartino" target='_blank'>
          <i className="fab fa-youtube"></i>
        </a>
        <a href="mailto:bdmbelendimartino@gmail.com" target='_blank'>
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://wa.me/3425355956/?text=Hola%20Belen!%20Quisiera%20contactarte%20por%20trabajo.%20Soy...%20" target='_blank'>
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <div  className='flex_designers'>
        <p className='disenadores'>© 2023 All Rights Reserved - Design and Development by <a href="https://www.linkedin.com/in/axel-clavero/" target='_blank'>Axel Clavero</a> and <a href="https://www.linkedin.com/in/maclavero/" target='_blank'>Pini Clavero</a></p>

      </div>
    </footer>
  )
}

export default Footer