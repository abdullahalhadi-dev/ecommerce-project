import React from 'react';
import './Slider.style.css';
import image01 from '../../../src/images/slider-image01.png';

const Slider = () => {
    return (
        <div className='slider-container'>
            <div className='col-md-6'>
                <div className='slider-image'>
                   <img src={image01} />
                </div>
            </div>
            <div className='col-md-6'>
                <div className='slider-text'>
                    <span>Sale off 20%</span>
                    <h2>Summer Offer <br /> 2022 Collection</h2>
                </div>

                <div className='slider-btn'>
                    <span>SHOP NOW</span>
                </div>
            </div>
        </div>
    );
};

export default Slider;