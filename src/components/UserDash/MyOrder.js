import React from 'react';
import OrderdProduct from '../OrderdProduct/OrderdProduct';

const MyOrder = () => {
    return (
        <div>
            <div className='banner-4'>
                <div className='d-flex justify-content-center shoe-b-text-1 container mb-5'>
                    <div  className='py-lg-4'>
                        <h3>
                            My Order
                        </h3>
                    </div>
                </div>
            </div>
            <OrderdProduct/>
        </div>
    );
};

export default MyOrder;