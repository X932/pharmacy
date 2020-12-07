import React from 'react';
import  './Advantages.scss';
import { useTranslation } from 'react-i18next';
import dental from '../MainContent/img/dental.png';
import Fade from 'react-reveal/Fade';

function Advantages() {
    const { t } = useTranslation();
    return (
        <Fade>
            <div className='advantages'>
                <div className='flex-container'>
                    <h2 id="advantages">{t('header.advantages')}</h2>
                    <div className='text'>
                            <p>
                                {t('advantages.advantages_short_info')}
                            </p>
                        </div>
                        <div className='flex-block'> 
                            <div className='flex-item one top'>
                                <img  className='products' src={dental} alt='Dental'></img>
                                <span>{t('advantages.product_header_advantage1')}</span>
                                <p>{t('advantages.product_content_advantage1')}</p>
                            </div>
                            <div className='flex-item top'>
                                <img  className='products' src={dental} alt='Dental'></img>
                                <span>{t('advantages.product_header_advantage2')}</span>
                                <p>{t('advantages.product_content_advantage2')}</p>
                            </div> 
                            <div className='flex-item top'>
                                <img  className='products' src={dental} alt='Dental'></img>
                                <span>{t('advantages.product_header_advantage3')}</span>
                                <p>{t('advantages.product_content_advantage3')}</p>
                            </div>
                            <div className='flex-item top four'>
                                <img  className='products' src={dental} alt='Dental'></img>
                                <span>{t('advantages.product_header_advantage4')}</span>
                                <p>{t('advantages.product_content_advantage4')}</p>
                            </div>
                        </div>
                        <div className='flex-block'> 
                            <div className='flex-item bottom one'>
                                <img  className='products' src={dental} alt='Dental'></img>
                                <span>{t('advantages.product_header_advantage5')}</span>
                                <p>{t('advantages.product_content_advantage5')}</p>
                            </div>
                            <div className='flex-item bottom'>
                                <img  className='products' src={dental} alt='Dental'></img>
                                <span>{t('advantages.product_header_advantage6')}</span>
                                <p>{t('advantages.product_content_advantage6')}</p>
                            </div> 
                            <div className='flex-item bottom'>
                                <img  className='products' src={dental} alt='Dental'></img>
                                <span>{t('advantages.product_header_advantage7')}</span>
                                <p>{t('advantages.product_content_advantage7')}</p>
                            </div>
                            <div className='flex-item bottom four'>
                                <img  className='products' src={dental} alt='Dental'></img>
                                <span>{t('advantages.product_header_advantage8')}</span>
                                <p>{t('advantages.product_content_advantage8')}</p>
                            </div>
                        </div>
                    </div>
            </div>
        </Fade>
    )
}
export default Advantages;
