import React from 'react';
import './Footer.style.css';

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className='container'>
                <div className='col-md-3'>
                    <div className='footer-logo'>
                        <h2>Flone.</h2>
                        <span>@ 2022 Flone.</span>
                        <p>All Rights Reserved</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='footer-about'>
                        <h5>ABOUT US</h5>
                        <ul>
                            <li>About us</li>
                            <li>Store location</li>
                            <li>Contact</li>
                            <li>Orders tracking</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='footer-follow'>
                        <h5>FOLLOW US</h5>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>You Tube</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='footer-subscribe'>
                        <h5>SUBSCRIBE</h5>
                        <p>Get E-mail updates about our latest shop <br /> and special offers.</p>
                        <input type='text' placeholder='Enter your email address...' /> <br />
                        <a href='#'>Subscribe</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;