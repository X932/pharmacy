import React from 'react';
import './Header.scss';
import logo from './img/logoExample.png';
import { useTranslation } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from 'react-reveal/Fade';

function Header() {
    const { t, i18n } = useTranslation();

    function handleLanguage(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <Fade top>
            <nav className='fixed_nav_container'>
                <AnchorLink href="#home" offset='80' className="logo">
                    <img src={logo} alt="LOGO" />
                </AnchorLink>
                <AnchorLink href="#about_us" offset='80' className="anchor">{t('header.about_us')}</AnchorLink>
                <AnchorLink href="#advantages" offset='80' className="anchor">{t('header.advantages')}</AnchorLink>
                <AnchorLink href="" offset='80' className="anchor">{t('header.contacts')}</AnchorLink>

                <div className="languages">
                    <button onClick={() => handleLanguage('en')}>Eng</button>
                    <button onClick={() => handleLanguage('ru')}>Rus</button>
                </div>
            </nav>
        </Fade>
    )
}

export default Header;