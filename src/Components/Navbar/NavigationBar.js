import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import './navigationBar.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png'
import { UserContext } from '../../App';

const NavigationBar = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(props)
    let textColor 
    if(props.background === "white") {
        textColor = {
            color: "black",
        }
    }
    console.log(loggedInUser);


    return (
            <div className="navbar-container">
                <div className="site-logo">
                    <Link to="/home"><img src={Logo} alt=""/></Link>
                </div>
                <div className="search-box">
                    <span> <FontAwesomeIcon className="search-icon" icon={faSearch} /> <input style={textColor , {border: '1px solid black'}} type="text"/></span>
                </div>
                <nav className="nav-items">
                    <ul>
                        <li>
                            <Link style={textColor} className="nav-menu-item">News</Link>
                        </li>
                        <li>
                            <Link style={textColor} className="nav-menu-item">Destination</Link>
                        </li>
                        <li>
                            <Link style={textColor} className="nav-menu-item">Blog</Link>
                        </li>
                        <li>
                            <Link style={textColor} className="nav-menu-item">Contact</Link>
                        </li>
                        <li>
                            {
                                loggedInUser.email ? `${loggedInUser.email}` : <Link to="/login" style={textColor} className="nav-menu-item">Login</Link>
                            }
                        </li>
                        <li>
                            {
                                loggedInUser.email ? <Link style={{color: 'green', fontWeight: 700}} onClick={() => {
                                    setLoggedInUser({});
                                    console.log('sign out button was clicked.');
                                }} className="nav-menu-item">Log Out</Link> : ''
                            }
                        </li>
                    </ul>
                </nav>
            </div>     
    );
};

export default NavigationBar;