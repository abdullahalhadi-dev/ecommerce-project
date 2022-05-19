import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.style.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='col-md-4'>
                    <h3>Flone.</h3>
                </div>
                <div className='navbar col-md-6'>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Collection</li>
                            <li>Pages</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </nav>
                </div>
                <div className='dashboard'>
                    <NavLink to="/login"><Button>Login</Button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;