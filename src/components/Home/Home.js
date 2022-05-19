import React from 'react';
import Blog from '../Blog/Blog';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Slider from '../Slider/Slider';



const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Features />
            <Products />
            <Blog />
            <Footer />

            
        </div>
    );
};

export default Home;