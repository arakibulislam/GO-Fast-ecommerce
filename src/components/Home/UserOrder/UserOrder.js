import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import OrderdProduct from '../../OrderdProduct/OrderdProduct';

const UserOrder = () => {
    return (
        <div>
            <Header/>
            <div className='banner-3'>
                <div className='d-flex justify-content-end shoe-b-text container'>
                    <div>
                        <h1>
                            Shoes Details
                        </h1>
                        <NavLink className='nav-link p-0 text-white' to='/products'>
                            <p><i className="fas fa-arrow-left"></i> All Shoes</p>
                        </NavLink>
                    </div>
                </div>
            </div>
            <OrderdProduct/>
            <Footer/>
        </div>
    );
};

export default UserOrder;