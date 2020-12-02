import React from 'react';
import './MainContent.scss';
import iron from './img/iron.png';

function MainContent() {
    return (
        <div>
            <div className='underheader'>
                <div className='underheader_container'>
                    <div className='underheader_left'>
                        <h1 class='header'>Все для Стоматологии</h1>
                        <div>
                            Магазин стоматологической и     технической     продукции в Душанбе.
                        </div>    
                    </div>
                    <img className='underheader_img' src={iron} alt='IROn'></img>
                </div>
            </div>
        </div>
    )
}

export default MainContent;