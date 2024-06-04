import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul className={style.navList}>
                <li className={style.navItem}>
                    <Link to="/" className={style.navLink}>Landing Page</Link>
                </li>
                <li className={style.navItem}>
                    <Link to="/home" className={style.navLink}>Home</Link>
                </li>
                <li className={style.navItem}>
                    <Link to="/form" className={style.navLink}>Crear Raza</Link>
                </li>
                <li className={style.navItem}>
                    <Link to="/about" className={style.navLink}>About</Link>
                </li>
                
            </ul>
        </nav>
    );
};

export default Navbar;
