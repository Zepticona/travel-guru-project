import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './navigationBar.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png'

const NavigationBar = () => {
    return (
            <div className="navbar-container">
                <div className="site-logo">
                    <Link to="/home"><img src={Logo} alt=""/></Link>
                </div>
                <div className="search-box">
                    <span> <FontAwesomeIcon className="search-icon" icon={faSearch} /> <input type="text"/></span>
                </div>
                <nav className="nav-items">
                    <ul>
                        <li>
                            <Link className="nav-menu-item">News</Link>
                        </li>
                        <li>
                            <Link className="nav-menu-item">Destination</Link>
                        </li>
                        <li>
                            <Link className="nav-menu-item">Blog</Link>
                        </li>
                        <li>
                            <Link className="nav-menu-item">Contact</Link>
                        </li>
                        <li>
                            <Link className="nav-menu-item">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>     
    );
};

export default NavigationBar;