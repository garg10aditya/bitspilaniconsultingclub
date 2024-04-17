import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import yourLogoHere from './logo.jpg';  // Ensure you have the logo in the src folder

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNewsSubmenu, setShowNewsSubmenu] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handlers for showing/hiding the news submenu
    const showNewsMenu = () => {
        setShowNewsSubmenu(true);
    };

    const hideNewsMenu = () => {
        setShowNewsSubmenu(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={yourLogoHere} alt="Logo" className="navbar-logo-image" />
                    <b> BITS Pilani Consulting Club</b>
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/about" className="sidebar-link">ABOUT</Link>
                <div className="sidebar-link"
                    onMouseEnter={showNewsMenu}
                    onMouseLeave={hideNewsMenu}>
                    WHAT'S NEW
                    {showNewsSubmenu && (
                        <div className="submenu">
                            {/* Map your news items here */}
                            <Link to="/news/1" className="submenu-item">News Item 1</Link>
                            <Link to="/news/2" className="submenu-item">News Item 2</Link>
                            <Link to="/news/3" className="submenu-item">News Item 3</Link>
                            <Link to="/news/4" className="submenu-item">News Item 4</Link>
                            <Link to="/news/5" className="submenu-item">News Item 5</Link>
                        </div>
                    )}
                </div>
                {/* ... other sidebar links */}
            </div>
        </nav>
    );
};

export default Navbar;
