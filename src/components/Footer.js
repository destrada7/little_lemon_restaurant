import React from 'react';
import "../styles/Footer.css"
import Lemon from '../images/Lemon.png';

const Footer = () => {
    return(
        <div className='footer-wrapper'>
            <div className='footer-logo'>
                <img src={Lemon} alt='Little Lemon Logo' />
            </div>
            <div className='link-list'>
                <div className='nav-footer'>
                    <h4>Navigation</h4>
                </div>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#menu'>Menu</a></li>
                    <li><a href='#reservations'>Reservations</a></li>
                    <li><a href='#order'>Order Online</a></li>
                    <li><a href='#login'>Login</a></li>
                </ul>
            </div>
            <div className='contact-footer'>
                <div className='contact-title-footer'>
                    <h4>Contact</h4>
                </div>
                <ul>
                    <li><a href='#adress'>Address</a></li>
                    <li><a href='#number'>Phone Number</a></li>
                    <li><a href='#email'>Email</a></li>
                </ul>
            </div>
            <div className='social-media-footer'>
                <div className='social-title'>
                    <h4>Social Media Links</h4>
                </div>
                <div className='media-icons'>
                    <p>instagram</p>
                </div>
            </div>
            <div className='legend-footer'>
                <p>&copy; 2024 Little Lemon. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;