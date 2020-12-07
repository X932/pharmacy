import React from 'react'
import './Contacts.scss';
// import adress from '../MainContent/img/home.png';
// import phone from '../MainContent/img/phone.png';
// import mail from '../MainContent/img/email.png';
// import { Map } from 'google-maps-react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function Contacts() {
const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyAXkxoQJ-MK-OgcqBV2cqDycLfUJxMVVFk'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
    
    return (
        <div className='block-contacts'>
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
                                    <span>Негмат Карабаева 82</span>
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
                    <div className='content-left'>
                        <div className='map'>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacts;
