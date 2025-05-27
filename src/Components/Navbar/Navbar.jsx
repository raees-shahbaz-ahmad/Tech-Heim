import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Profile from "../Models/LoginModels/Profile.jsx";
import CartModel from "../Models/CartModel/CartModel.jsx";
import SearchModel from "../Models/SearchModel/SearchModel.jsx";
import "../Navbar/Navbar.css";

const Navbar = () => {

    const [showSearhModel, setShowSearhModel] = useState(false);

    const handleSeacrhIconClick = () => {
        setShowSearhModel(true);
    }

    const closeSearchModel = () => {
        setShowSearhModel(false);
    }



    const [showCartModel, setShowCartModel] = useState(false);

    const handleCartIconClick = () => {
        setShowCartModel(true);
    }

    const closeCartModel = () => {
        setShowCartModel(false);
    }



    const [showProfile, setShowProfile] = useState(false);

    const handleUserIconClick = () => {
        setShowProfile(true);
    }

    const closeProfile = () => {
        setShowProfile(false);
    }

    return (
        <nav className="navbar">

            <div className="logo">
                <img src="/logo.png" alt="Logo" />
            </div>

            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/product">Products</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/faq">Faq</Link></li>
            </ul>

            <div className="icon-links">
                <div>
                    <svg onClick={handleSeacrhIconClick} className="icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.5 29C24.7467 29 29 24.7467 29 19.5C29 14.2533 24.7467 10 19.5 10C14.2533 10 10 14.2533 10 19.5C10 24.7467 14.2533 29 19.5 29Z"
                            stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30 30L28 28" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </div>

                <div>
                    <svg onClick={handleCartIconClick} className="icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.1909 14.3799C13.0009 14.3799 12.8009 14.2999 12.6609 14.1599C12.3709 13.8699 12.3709 13.3899 12.6609 13.0999L16.2909 9.46994C16.5809 9.17994 17.0609 9.17994 17.3509 9.46994C17.6409 9.75994 17.6409 10.2399 17.3509 10.5299L13.7209 14.1599C13.5709 14.2999 13.3809 14.3799 13.1909 14.3799Z"
                            fill="#0C0C0C" />
                        <path
                            d="M26.8091 14.3799C26.6191 14.3799 26.4291 14.3099 26.2791 14.1599L22.6491 10.5299C22.3591 10.2399 22.3591 9.75994 22.6491 9.46994C22.9391 9.17994 23.4191 9.17994 23.7091 9.46994L27.3391 13.0999C27.6291 13.3899 27.6291 13.8699 27.3391 14.1599C27.1991 14.2999 26.9991 14.3799 26.8091 14.3799Z"
                            fill="#0C0C0C" />
                        <path
                            d="M28.21 18.6001C28.14 18.6001 28.07 18.6001 28 18.6001H27.77H12C11.3 18.6101 10.5 18.6101 9.92 18.0301C9.46 17.5801 9.25 16.8801 9.25 15.8501C9.25 13.1001 11.26 13.1001 12.22 13.1001H27.78C28.74 13.1001 30.75 13.1001 30.75 15.8501C30.75 16.8901 30.54 17.5801 30.08 18.0301C29.56 18.5501 28.86 18.6001 28.21 18.6001ZM12.22 17.1001H28.01C28.46 17.1101 28.88 17.1101 29.02 16.9701C29.09 16.9001 29.24 16.6601 29.24 15.8501C29.24 14.7201 28.96 14.6001 27.77 14.6001H12.22C11.03 14.6001 10.75 14.7201 10.75 15.8501C10.75 16.6601 10.91 16.9001 10.97 16.9701C11.11 17.1001 11.54 17.1001 11.98 17.1001H12.22Z"
                            fill="#0C0C0C" />
                        <path
                            d="M17.7598 26.3C17.3498 26.3 17.0098 25.96 17.0098 25.55V22C17.0098 21.59 17.3498 21.25 17.7598 21.25C18.1698 21.25 18.5098 21.59 18.5098 22V25.55C18.5098 25.97 18.1698 26.3 17.7598 26.3Z"
                            fill="#0C0C0C" />
                        <path
                            d="M22.3594 26.3C21.9494 26.3 21.6094 25.96 21.6094 25.55V22C21.6094 21.59 21.9494 21.25 22.3594 21.25C22.7694 21.25 23.1094 21.59 23.1094 22V25.55C23.1094 25.97 22.7694 26.3 22.3594 26.3Z"
                            fill="#0C0C0C" />
                        <path
                            d="M22.8907 30.75H16.8607C13.2807 30.75 12.4807 28.62 12.1707 26.77L10.7607 18.12C10.6907 17.71 10.9707 17.33 11.3807 17.26C11.7907 17.19 12.1707 17.47 12.2407 17.88L13.6507 26.52C13.9407 28.29 14.5407 29.25 16.8607 29.25H22.8907C25.4607 29.25 25.7507 28.35 26.0807 26.61L27.7607 17.86C27.8407 17.45 28.2307 17.18 28.6407 17.27C29.0507 17.35 29.3107 17.74 29.2307 18.15L27.5507 26.9C27.1607 28.93 26.5107 30.75 22.8907 30.75Z"
                            fill="#0C0C0C" />
                    </svg>
                </div>

                <div>
                    <svg onClick={handleUserIconClick} className="icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 20.75C16.83 20.75 14.25 18.17 14.25 15C14.25 11.83 16.83 9.25 20 9.25C23.17 9.25 25.75 11.83 25.75 15C25.75 18.17 23.17 20.75 20 20.75ZM20 10.75C17.66 10.75 15.75 12.66 15.75 15C15.75 17.34 17.66 19.25 20 19.25C22.34 19.25 24.25 17.34 24.25 15C24.25 12.66 22.34 10.75 20 10.75Z"
                            fill="#0C0C0C" />
                        <path
                            d="M28.5901 30.75C28.1801 30.75 27.8401 30.41 27.8401 30C27.8401 26.55 24.3202 23.75 20.0002 23.75C15.6802 23.75 12.1602 26.55 12.1602 30C12.1602 30.41 11.8202 30.75 11.4102 30.75C11.0002 30.75 10.6602 30.41 10.6602 30C10.6602 25.73 14.8502 22.25 20.0002 22.25C25.1502 22.25 29.3401 25.73 29.3401 30C29.3401 30.41 29.0001 30.75 28.5901 30.75Z"
                            fill="#0C0C0C" />
                    </svg>
                </div>
            </div>

            {showCartModel && <CartModel onClose={closeCartModel} />}

            {showSearhModel && <SearchModel onClose={closeSearchModel} />}

            {showProfile && <Profile onClose={closeProfile} />}

        </nav>
    );
};

export default Navbar;