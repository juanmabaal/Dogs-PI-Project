// src/components/AboutMe/AboutMe.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Home/NavBar/NavBar';
import style from './AboutMe.module.css';
import aboutMeImage from './aboutMeImage.jpg';
import pawPrint from './pawPrint.png'; // Asegúrate de tener esta imagen en tu carpeta

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className={style.background}>
        <div className={style.aboutMeContainer}>
          <img src={aboutMeImage} alt="Profile" className={style.profileImage} />
          <h2 className={style.title}>About Me</h2>
          <p className={style.description}>
            Soy Juanma, un apasionado desarrollador con experiencia en ...
          </p>
          <div className={style.socialLinks}>
            <a href="https://www.linkedin.com/in/juan-manuel-balaguera-alvira/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className={style.icon} />
            </a>
            <a href="https://wa.me/3176473082" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className={style.icon} />
            </a>
            <a href="https://github.com/juanmabaal" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className={style.icon} />
            </a>
          </div>
        </div>
        <img src={pawPrint} alt="Paw Print" className={style.pawPrintTopLeft} />
        <img src={pawPrint} alt="Paw Print" className={style.pawPrintBottomRight} />
      </div>
    </>
  );
};

export default AboutMe;

