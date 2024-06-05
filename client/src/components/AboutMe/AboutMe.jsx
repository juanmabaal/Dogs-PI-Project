// src/components/AboutMe/AboutMe.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Home/NavBar/NavBar';
import style from './AboutMe.module.css';
import generatePawPrints from "../../utils/generatePawPrints";
import aboutMeImage from './aboutMeImage.jpg';

const AboutMe = () => {

  const pawPrintsData = generatePawPrints(100);
  return (
    <div className={style.container}>
       {pawPrintsData.map((position, index) => (
                <div
                    key={index}
                    className={style.pawPrint}
                    style={{
                        top: `${position.top}%`,
                        left: `${position.left}%`,
                        position: 'absolute'
                    }}
                />
            ))}
      <Navbar />
      
        <div className={style.aboutMeContainer}>
          <img src={aboutMeImage} alt="Profile" className={style.profileImage} />
          <h2 className={style.title}>About Me</h2>
          <p className={style.description}>
          I am a dedicated and passionate individual who takes immense pride in my work. Perseverance is my driving force, and I am committed to seeing my goals through to completion. Currently, I am enrolled in a bootcamp, and this project represents a significant milestone in my journey as a developer. Through this project, I have had the opportunity to integrate and apply my knowledge in backend development, databases, and frontend design, showcasing a holistic approach to software development.

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
    </div>
  );
};

export default AboutMe;

