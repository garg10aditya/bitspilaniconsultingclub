import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import yourLogoHere from './logo.jpg';  // Correct path required

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="navbar sedan-regular">
            <Link to="/" className="navbar-logo">
                <img src={yourLogoHere} alt="Logo" className="logo" />
                BITS Pilani Consulting Club
            </Link>
            <div className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
                <Link to="/about" className="navbar-item">About</Link>
                <Link to="/events" className="navbar-item">Events</Link>
                <Link to="/contactus" className="navbar-item">Contact us</Link>
                <a href="https://www.instagram.com/bitspilaniconsultingclub/" className="navbar-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/company/bits-pilani-consulting-club/" className="navbar-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="navbar-burger" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </header>
    );
};

export default Navbar;
