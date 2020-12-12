import React from 'react';
import  './Advantages.scss';
import { useTranslation } from 'react-i18next';
import priceIcon from '../../assets/images/advantages/price.png';
import productIcon from '../../assets/images/advantages/product.png';
import qualityIcon from '../../assets/images/advantages/quality.png';
import deliveryIcon from '../../assets/images/advantages/delivery.png';
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
                                <img  className='products' src={priceIcon} alt='priceIcon'></img>
                                <p>{t('advantages.product_content_advantage1')}</p>
                            </div>
                            <div className='flex-item two top'>
                                <img  className='products' src={productIcon} alt='productIcon'></img>
                                <p>{t('advantages.product_content_advantage2')}</p>
                            </div> 
                            <div className='flex-item-part-2'>
                                <div className='flex-item three top'>
                                    <img  className='products' src={qualityIcon} alt='qualityIcon'></img>
                                    <p>{t('advantages.product_content_advantage3')}</p>
                                </div>
                                <div className='flex-item four top'>
                                    <img  className='products' src={deliveryIcon} alt='deliveryIcon'></img>
                                    <p>{t('advantages.product_content_advantage4')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </Fade>
    )
}
export default Advantages;
