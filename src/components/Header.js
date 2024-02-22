import React from 'react';
import Logo from '../images/Logo.svg';

const Header = () => {
    return(
        <header>
            <img src={Logo} alt='Little Lemon Logo'/>;
        </header>
    );
};

export default Header;