import React from 'react';
import './SingleProduct.style.css';

import product1 from '../../../src/images/product1.jpg';


const SingleProduct = () => {
    return (
        <div className='single-product-area'>        
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='single-product-image'>
                            <img src={product1} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='single-product-details'>
                            <h3>Simple Nice Shoe</h3>
                            <span>£180.00</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid
                                 ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud 
                                 exercitation ullamco</p>
                            
                            <ul className='border-bottom'>
                                <li>– 0.5 mm Dail</li>
                                <li>– Inspired vector icons</li>
                                <li>– Very modern style</li>
                            </ul>

                            <div className='add-to-cart'>
                                <span className='add-count'>1</span>
                                <span className='cart'>ADD TO CART</span>
                            </div>

                            <div className='other-details'>
                                <h5>Categories: Fashion, Hot Sales</h5>
                                <h5>Tags: Bag, Fashion, Jumper, Winter</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    );
};

export default SingleProduct;