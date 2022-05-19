import React from 'react';
import './Login.style.css'
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='container'>
            <div className='login-area'>
                <h3>Member Login</h3>
               <form>
                   <div className='username'>
                    <input type='text' placeholder='Username'></input>
                   </div>

                   <div className='password'>
                    <input type='password' placeholder='Password'></input>
                   </div>
                    
                    <div className='login-btn'>
                        <button type='submit'>
                            <NavLink to="/">Login</NavLink>
                        </button>
                    </div>

                    <div className='forgot-pass'>
                        <a href='#'><h4>Forgot Password?</h4></a>
                    </div>
                    
                </form>
            </div>
            
        </div>
    );
};

export default Login;