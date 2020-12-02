import React from 'react';
import './Header.scss';
import logo from './img/logoExample.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header() {
    return (
        <nav className='fixed_nav_container'>
            <AnchorLink href="#home" offset='80' className="logo">
                <img src={logo} alt="LOGO" />
            </AnchorLink>
            <AnchorLink href="" offset='80' className="anchor">About Us</AnchorLink>
            <AnchorLink href="" offset='80' className="anchor">Our Advantages</AnchorLink>
            <AnchorLink href="" offset='80' className="anchor">Contacts</AnchorLink>
        </nav>
    )
}

export default Header;