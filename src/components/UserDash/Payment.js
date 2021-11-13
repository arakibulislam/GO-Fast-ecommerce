import React from 'react';
import soon from '../../images/coming-soon.png'

const Payment = () => {
    return (
        <div>
            <div className='banner-4'>
                <div className='d-flex justify-content-center shoe-b-text-1 container mb-5'>
                    <div className='py-lg-4'>
                        <h3>
                            Payment
                        </h3>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                    <img className='img-fluid' src={soon} alt="" />
                    <h1 className='price display-4 fw-bolder'>PAYMENT COMMING SOON !</h1>
                </div>
            </div>
        </div>
    );
};

export default Payment;