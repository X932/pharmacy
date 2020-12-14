import React, { useState, useEffect, useRef } from 'react';
import './Header.scss';
import logo from '../../assets/images/header/logoExample.png';
import { useTranslation } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from 'react-reveal/Fade';

function Header() {
    const burgerMenuRef = useRef(null);
    const burgerBtnRef = useRef(null);
    DetectClick(burgerMenuRef);

    const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);
    const { t, i18n } = useTranslation();

    function handleLanguage(lang) {
        i18n.changeLanguage(lang);
    }

    function DetectClick(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)
                && !burgerBtnRef.current.contains(event.target)) {

                    setActiveBurgerMenu(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }, [ref]);
    }

    function menuController() {
        setActiveBurgerMenu(!activeBurgerMenu);
    }

    return (
        <Fade top>
            <nav className='fixed_nav_container'>
                <AnchorLink href="#home" offset='80' className="logo">
                    <img src={logo} alt="LOGO" />
                </AnchorLink>
                <div className="menu_anchors">
                    <AnchorLink href="#about_us" offset='60' className="anchor">{t('header.about_us')}</AnchorLink>
                    <AnchorLink href="#advantages" offset='80' className="anchor">{t('header.advantages')}</AnchorLink>
                    <AnchorLink href="#contacts" className="anchor">{t('header.contacts')}</AnchorLink>
                </div>
                <div className="languages">
                    <button onClick={() => handleLanguage('en')}>Eng</button>
                    <button onClick={() => handleLanguage('ru')}>Рус</button>
                    <button onClick={() => handleLanguage('chi')}>中文</button>
                </div>
                
                <div className={activeBurgerMenu ? 'opened burger_btn' : 'burger_btn'} onClick={() => menuController()} ref={burgerBtnRef} >
                    <span></span>
                </div>
                
                <div className={activeBurgerMenu ? "active_burger" : "inactive_burger"} 
                    onClick={() => setActiveBurgerMenu(false)} ref={burgerMenuRef} >

                    <AnchorLink href="#about_us" offset='60' className="anchor">{t('header.about_us')}</AnchorLink>
                    <AnchorLink href="#advantages" offset='80' className="anchor">{t('header.advantages')}</AnchorLink>
                    <AnchorLink href="#contacts" offset='80' className="anchor">{t('header.contacts')}</AnchorLink>
                
                </div>
            </nav>
        </Fade>
    )
}

export default Header;