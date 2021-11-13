import React from 'react';
import BannerSection from './BannerSection/BannerSection'
import About from './About/About'
import Header from '../Header/Header';
import HomeProducts from './HomeProducts/HomeProducts';
import Footer from '../Footer/Footer';
import UserReviews from './UserReviews/UserReviews';
import Blogs from './Blogs/Blogs';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Header />
            <BannerSection />
            <About />
            <HomeProducts />
            <div className='text-center my-5 container '>
                <h1 className='display-5 fw-bolder text-muted'>FROM THE BLOG</h1>
            </div>
            <Blogs />
            <div className='text-center mt-5'>
                <NavLink to='/blogs'>
                    <button className='button '>SHOW ALL</button>
                </NavLink>
            </div>
            <UserReviews />
            <Footer></Footer>
        </div>
    );
};

export default Home;