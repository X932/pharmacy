import React from 'react'
import './Contacts.scss';
import adress from '../MainContent/img/home.png';
import phone from '../MainContent/img/phone.png';
import mail from '../MainContent/img/email.png';
import vladmiva from '../MainContent/img/vladmiva.png';
import kmiz from '../MainContent/img/kmiz.png';
import aliftechLogo from '../MainContent/img/aliftech.png';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Contacts = () => {

    const mapStyles = {        
    height: "300px",
    width: "100%"};
  
  const defaultCenter = {
    lat: 38.528675, lng: 68.762532
  }
  
    return (
        <div className='block-contacts'>
            <div className='block-partners'>
                <h2>Партнёры</h2>
                <div className='partners-container'>
                        <img className='vladmiva' src={vladmiva} alt='Partner Vladmiva'></img>
                        <img className='kmiz' src={kmiz} alt='Partner Kmiz'></img>
                </div>    
            </div>
            <div className='contacts-container'>
                <div className='contacts-content'>
                    <div className='contents-left'>
                        <h2>Наши Контакты</h2>
                        <div className='contact-item'>
                            <div className='adress seperate'>
                                <div>
                                    <img className='pharm-adress' src={adress} alt='Adress'></img>
                                </div>
                                <div>
                                    <span className='capital-letter'>Адрес:</span>
                                    <span className='street'>Негмат Карабаева 82</span>
                                </div>
                            </div>
                            <div className='phone seperate'>
                                <div>
                                    <img className='phone' src={phone} alt='Adress'></img>
                                </div>
                                <div>
                                    <span className='capital-letter'>Телефон:</span>
                                    <span className='num'>(+992)980885520</span>
                                    <span className='num'>(+992)935768787</span>
                                </div>
                            </div>
                            <div className='mail seperate'>
                                <div>
                                    <img className='mail-icon' src={mail} alt='Adress'></img>
                                </div>
                                <div>
                                    <span className='capital-letter'>Почта:</span>
                                    <span className='gmail'>abu.nazirmadov@gmail.com</span>
                                    <span className='gmail'>gulshan.mst@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className='contact-item'></div>
                        <div className='contact-item'></div>
                    </div>
                    <div className='content-right'>
                        <div className='map'>
                        <LoadScript
                            googleMapsApiKey='AIzaSyAXkxoQJ-MK-OgcqBV2cqDycLfUJxMVVFk'>
                            <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={13}
                            center={defaultCenter}
                            />
                        </LoadScript>
                        </div>
                    </div>
                </div>
            </div>
            <div className='aliftechLogo'>
                <div className='aliftechLogo-container'>
                Made by <img src={aliftechLogo} className='logo' alt='alifetchLogo'></img>
                    <div className='madeBy'>
                        <span>AlifTech</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacts;
