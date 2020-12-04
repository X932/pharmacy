import React from 'react';
import { useTranslation } from 'react-i18next';
import './MainContent.scss';
import iron from './img/iron.png';

function MainContent() {
    const { t } = useTranslation();

    return (
        <div>
            <div className='underheader' id='home'>
                <div className='underheader_container'>
                    <div className='underheader_left'>
                        <h1 className='header'>{t('main_content.header')}</h1>
                        <div>
                            {t('main_content.content')}
                        </div>    
                    </div>
                    <img className='underheader_img' src={iron} alt='IROn'></img>
                </div>
            </div>
        </div>
    )
}

export default MainContent;