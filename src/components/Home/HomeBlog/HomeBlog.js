import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Blogs from '../Blogs/Blogs';

const HomeBlog = () => {
    return (
        <div>
            <Header/>
            <div className='banner-3'>
                <div className='d-flex justify-content-end shoe-b-text container'>
                    <h1>
                       GO FAST Blogs
                    </h1>
                </div>
            </div>
            <Blogs/>
            <Footer/>
        </div>
    );
};

export default HomeBlog;