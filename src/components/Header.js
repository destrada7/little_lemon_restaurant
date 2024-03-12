import React from 'react';
import lemonLogo from '../images/Logo.svg';
import '../styles/Header-Nav.css';

const Header = () => {
    return(
        <header className='nav-logo'>
            <img src={lemonLogo} alt='Little Lemon Logo'/>
        </header>
    );
};

export default Header;