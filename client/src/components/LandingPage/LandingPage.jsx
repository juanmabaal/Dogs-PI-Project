import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={style.landingContainer}>
      <header className={style.header}>
        <h1>Bienvenido a Henry Dogs</h1>
        <p>Encuentra y crea las mejores razas de perros</p>
      </header>
      <main className={style.main}>
        <div className={style.overlay}></div> {/* Capa de superposición */}
        <div className={style.content}> {/* Contenido principal */}
          <Link to="/home">
            <button className={style.exploreButton}>Explorar Perros</button>
          </Link>
        </div>
      </main>
      <footer className={style.footer}>
        <p>© 2024 Mi primer sitio web</p>
        <p>
          <a href="mailto:juanma_baal@gmail.com" target="_blank" rel="noopener noreferrer">
            juanma_baal@gmail.com
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/juan-manuel-balaguera-alvira/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;


