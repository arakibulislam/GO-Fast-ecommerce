import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../images/notfound.png'

const NotFound = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
            <div>
                <img className='img-fluid' src={notFound} alt="" />
            </div>
            <div>
                <NavLink to='/home'>
                    <button className='button mt-3'>Back To Home</button>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;