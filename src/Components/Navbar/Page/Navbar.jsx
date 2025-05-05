import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
            <img src="/vite.svg" alt="Logo" />

            </div>

            <ul className="nav-links">
                <li><Link to="/Home">Home</Link></li>
               
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Faq">Faq</Link></li>
            </ul>

            {/* <ul className="icon-links">
                <li><Link to="/search"><img src="/public/search-normal.svg" alt="Search" className="icon" /></Link></li>
                <li><Link to="/bag"><img src="/public/bag.svg" alt="Bag" className="icon" /></Link></li>
                <li><Link to="/user"><img src="/user.svg" alt="User" className="icon" /></Link></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;