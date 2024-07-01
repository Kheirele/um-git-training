import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const handleLogoClick = () => {
        console.log("Logo Clicked!");
    };

    return (
        <div className="navbar">
            <a className="Name"
                onClick={handleLogoClick}
            >DevFolio</a>
            <div className="Links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
