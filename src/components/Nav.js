import React from 'react';
import '../styles/Header-Nav.css';


const Nav = () => {
    return(
        <div className="nav-menu">
            <nav>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#menu'>Menu</a></li>
                    <li><a href='#reservations'>Reservations</a></li>
                    <li><a href='#order'>Order Online</a></li>
                    <li><a href='#login'>Login</a></li>
                </ul>
            </nav>
        </div>

    );
};

export default Nav;