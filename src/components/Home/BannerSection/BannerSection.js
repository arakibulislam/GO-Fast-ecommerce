import React from 'react';
import { NavLink } from 'react-router-dom';

const BannerSection = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='banner-1 row justify-content-center align-items-center'>
                    <div className='col-lg-5 col-12 order-lg-0 order-1'>
                        <h1 className='fw-bolder display-3'>
                            <span className='text-banner-1'>SHOES</span>
                            <br />
                            <span className='display-4 fw-bold'>
                                New
                                <br />
                                Collection!
                            </span>
                        </h1>
                        <p>
                            global community dedicated to bringing out the best in one another ,GO FAST By You customization, and special offers. And it's all free.
                        </p>
                        <NavLink to='/products'>
                            <button className='button'><i className="fas fa-cart-plus me-2"></i>Add To Bag</button>
                        </NavLink>
                    </div>
                    <div className='col-lg-7 col-12 text-center order-lg-1 order-0 mb-lg-0 mb-5'>
                        <img className='img-fluid' src="https://preview.colorlib.com/theme/karma/img/banner/xbanner-img.png.pagespeed.ic.xt3MuruiIf.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;