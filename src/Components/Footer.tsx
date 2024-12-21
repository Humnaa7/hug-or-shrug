import React from 'react';
import logo from '../Assets/hug-or-shrug-logo.png'
import './Footer.css';

function Footer() {
return (
    <div className='footerContainer'>
    <div className='footerContainerContent'>
        <img className='logo' src={logo}/>
    <nav>
        <ul className='navList'>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Blogs</li>
        </ul>
    </nav>
    </div>
    <div className='copyrightContainer'>
    <p className='copyrightStatement'>&copy; HugOrShrug 2024</p>
    </div>
    </div>
);
}

export default Footer;