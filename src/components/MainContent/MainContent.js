import React from 'react';
import { useTranslation } from 'react-i18next';
import './MainContent.scss';
import mainPhoto from '../../assets/images/mainContent/main_photo.png';
import Fade from 'react-reveal/Fade';

function MainContent() {
    const { t } = useTranslation();

    return (
        <div>
            <div className='underheader' id='home'>
                <div className='underheader_container'>
                    <Fade top delay={200}>
                        <div className='underheader_left'>
                            <h1 className='header'>{t('main_content.header')}</h1>
                            <div>
                                {t('main_content.content')}
                            </div>    
                        </div>
                    </Fade>
                    <Fade>
                        <img className='underheader_img' src={mainPhoto} alt='noMainPhoto'></img>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default MainContent;