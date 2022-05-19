import React from 'react';
import './Features.style.css';
import image02 from '../../../src/images/feature-1.png'
import image04 from '../../../src/images/feature-2.png'
import image06 from '../../../src/images/feature-3.png'

const Features = () => {
    return (
        <div className='container'>
            <div className='features'>
                <div className='col-md-4'>
                    <div className='feature-01'>
                        <div className='feature-01-text'>
                            <h4>Watches</h4>
                            <span>Starting at $99.00</span>
                        </div>
                        <div className='feature-01-image'>
                        <img src={image02} />
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='feature-01'>
                        <div className='feature-01-text'>
                            <h4>Plo Bag</h4>
                            <span>Starting at $79.00</span>
                        </div>
                        <div className='feature-01-image'>
                        <img src={image04} />
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='feature-01'>
                        <div className='feature-01-text'>
                            <h4>Sunglass</h4>
                            <span>Starting at $29.00</span>
                        </div>
                        <div className='feature-01-image'>
                        <img src={image06} />
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Features;