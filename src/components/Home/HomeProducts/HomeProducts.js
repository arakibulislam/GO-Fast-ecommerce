import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../CustomCss/CustomCss.css'

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://intense-sierra-15995.herokuapp.com/product')
            .then(res => {
                setProducts(res.data);
            })
    }, [])
    return (
        <Container className='pb-5'>
            <div className=''>
                <h1 className='display-5 text-center my-5 fw-bolder text-muted'>
                    LATEST PRODUCTS
                </h1>
            </div>
            <div className='row '>
                {products.slice(0, 6).map(product =>
                    <div key={product._id} className='col-lg-4 col-md-6 col-12 g-4 '>

                        <div className="product-grid">
                            <div className="product-image">
                                <div className="image">
                                    <img className="pic-1" src={product.img} />
                                    <img className="pic-2" src={product.img2} />
                                </div>
                                <span class="product-sale-label">{product.type}</span>
                                <a href="/" className="product-like-icon" data-tip="Add to Wishlist">
                                    <i className="far fa-heart"></i>
                                </a>
                                <ul className="product-links d-flex justify-content-around">
                                    <li>
                                        <NavLink className=' product-link' to={`/product/${product._id} `}>
                                            <i className="fa fa-search"></i>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='product-link' to={`/product/${product._id} `}>
                                            <i className="fas fa-shopping-cart"></i>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className=' product-link' to={`/product/${product._id} `}>
                                            <i className="fa fa-random"></i>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-content">
                                <NavLink className='nav-link p-0' to={`/product/${product._id} `}>
                                    <h3 className="title">{product.name}</h3>
                                </NavLink>

                                <div className="price">${product.price}</div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </Container>
    );
};

export default HomeProducts;