import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container >
            <div className='row features text-center rounded-3 banner-2 '>
                <div className='col-lg-3 col-12 border-end mb-lg-0 mb-4'>
                    <h3 className='mb-3'><i className="fas fa-truck text-banner-1"></i></h3>
                    <h5 className='mb-0 '>Free Delivery</h5>
                    <p className='mb-0 text-muted'>Free Shipping on all order</p>
                </div>
                <div className='col-lg-3 col-12 border-end mb-lg-0 mb-4'>
                    <h3 className='mb-3'><i className="fas fa-sync text-banner-1"></i></h3>
                    <h5 className='mb-0 '>Return Policy</h5>
                    <p className='mb-0 text-muted'>Free Shipping on all order</p>
                </div>
                <div className='col-lg-3 col-12 border-end mb-lg-0 mb-4'>
                    <h3 className='mb-3'><i className="fas fa-headset text-banner-1"></i></h3>
                    <h5 className='mb-0 '>24/7 Support</h5>
                    <p className='mb-0 text-muted'>Free Shipping on all order</p>
                </div>
                <div className='col-lg-3 col-12 '>
                    <h3 className='mb-3'><i className="fab fa-paypal text-banner-1"></i></h3>
                    <h5 className='mb-0 '>Secure Payment</h5>
                    <p className='mb-0 text-muted'>Free Shipping on all order</p>
                </div>
                

            </div>
        </Container>
    );
};

export default About;