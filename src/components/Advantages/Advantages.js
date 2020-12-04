import React from 'react';
import  './Advantages.scss';
import dental from '../MainContent/img/dental.png';


function Advantages() {
    return (
        <div className='advantages'>
            <div className='flex-container'>
                <h2>Наши Преимущества</h2>
                <div className='text'>
                        <p>
                            Lorem Ipsum является текст-заполнитель обычно       используется в графических, печать и    издательской     индустрии для предварительного    просмотра макета и   визуальных макетах.
                        </p>
                    </div>
                    <div className='flex-block'> 
                        <div className='flex-item one top'>
                            <img  className='products' src={dental} alt='Dental'></img>
                            <span>Lorem Bro Ipsum</span>
                            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        </div>
                        <div className='flex-item top'>
                            <img  className='products' src={dental} alt='Dental'></img>
                            <span>Lorem Bro Ipsum</span>
                            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        </div> 
                        <div className='flex-item top'>
                            <img  className='products' src={dental} alt='Dental'></img>
                            <span>Lorem Bro Ipsum</span>
                            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        </div>
                        <div className='flex-item top four'>
                            <img  className='products' src={dental} alt='Dental'></img>
                            <span>Lorem Bro Ipsum</span>
                            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        </div>
                    </div>
                    <div className='flex-block'> 
                        <div className='flex-item bottom one'>
                            <img  className='products' src={dental} alt='Dental'></img>
                            <span>Lorem Bro Ipsum</span>
                            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        </div>
                        <div className='flex-item bottom'>
                            <img  className='products' src={dental} alt='Dental'></img>
                            <span>Lorem Bro Ipsum</span>
                            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        </div> 
                        <div className='flex-item bottom'>
                            <img  className='products' src={dental} alt='Dental'></img>
                            <span>Lorem Bro Ipsum</span>
                            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        </div>
                        <div className='flex-item bottom four'>
                            <img  className='products' src={dental} alt='Dental'></img>
                            <span>Lorem Bro Ipsum</span>
                            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Advantages;
