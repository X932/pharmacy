import React from 'react'
import './Contacts.scss';
import address from '../../assets/images/contacts/home.png';
import phone from '../../assets/images/contacts/phone.png';
import mail from '../../assets/images/contacts/email.png';
import vladmiva from '../../assets/images/partners/vladmiva.png';
import kmiz from '../../assets/images/partners/kmiz.png';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
    const { t } = useTranslation();

    const mapStyles = {        
        height: "300px",
        width: "100%"
    };
  
  const defaultCenter = {
    lat: 38.528675, lng: 68.762532
  }
  
    return (
        <div className='block-contacts'>
            <div className='block-partners'>
                <h2>{t('partners.header')}</h2>
                <div className='partners-container'>
                    <a href="https://vladmiva.ru/" target="blank">
                        <img className='vladmiva' src={vladmiva} alt='Partner Vladmiva'></img>
                    </a>
                    <a href="https://kmiz-online.ru/" target="blank">
                        <img className='kmiz' src={kmiz} alt='Partner Kmiz'></img>
                    </a>
                </div>    
            </div>
            <div className='contacts-container' id='contacts'>
                <div className='contacts-content'>
                    <div className='contents-left'>
                        <h2>{t('contacts.header')}</h2>
                        <div className='contact-item'>
                            <div className='address seperate'>
                                <div>
                                    <img className='pharm-address' src={address} alt='address'></img>
                                </div>
                                <div>
                                    <span className='capital-letter'>{t('contacts.address.header')}:</span>
                                    <span className='street'>{t('contacts.address.street')} 82</span>
                                </div>
                            </div>
                            <div className='phone seperate'>
                                <div>
                                    <img className='phone' src={phone} alt='address'></img>
                                </div>
                                <div>
                                    <span className='capital-letter'>{t('contacts.telephone')}:</span>
                                    <span className='num'>(+992)980885520</span>
                                    <span className='num'>(+992)935768787</span>
                                </div>
                            </div>
                            <div className='mail seperate'>
                                <div>
                                    <img className='mail-icon' src={mail} alt='address'></img>
                                </div>
                                <div>
                                    <span className='capital-letter'>{t('contacts.mail')}:</span>
                                    <span className='gmail'>abu.nazirmadov@gmail.com</span>
                                    <span className='gmail'>gulshan.mst@gmail.com</span>
                                </div>
                            </div>
                        </div>
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
                Made by 
                    <div className='madeBy'> 
                        <span>AlifTech</span>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Contacts;
