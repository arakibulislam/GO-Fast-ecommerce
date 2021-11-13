import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Shoes = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://intense-sierra-15995.herokuapp.com/product')
            .then(res => {
                setProducts(res.data);
            })
    }, [])
    return (
        <div>
            <div className='banner-3'>
                <div className='d-flex justify-content-end shoe-b-text container'>
                    <h1>
                        All Available Shoes
                    </h1>
                </div>
            </div>
            <Container>
                <div className='row'>
                    {products.map(product =>
                        <div key={product._id} className='col-lg-6 col-12'>
                            <section className=" row  align-items-center mb-5">
                                <div className=" col-6 ">
                                    <div className="photo-container">
                                        <div className="product-image">
                                            <a href="/" className="image">
                                                <img className="pic-1" src={product.img} />
                                                <img className="pic-2" src={product.img2} />
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-6">
                                    <p className='fw-bolder text-danger mb-1'>{product.type}</p>
                                    <p>
                                        <small className='text-muted'>SKU: {product._id.slice(0, 8)}</small>
                                    </p>
                                    <div>
                                        <h4 className='mb-3 fw-bold text-muted'>{product.name}</h4>
                                        <p>Size: <span className='border p-2'>{product.size}</span></p>
                                    </div>
                                    <div className="price">
                                        $ {product.price}
                                    </div>
                                    <h4 className='text-muted'>{product.category}</h4>


                                    <NavLink className='nav-link p-0' to={`/product/${product._id} `}>
                                        <button className="button">ADD TO CART</button>
                                    </NavLink>
                                </div>
                            </section>
                        </div>)}

                </div>
            </Container>
        </div>
    );
};

export default Shoes;