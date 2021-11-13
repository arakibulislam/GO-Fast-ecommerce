import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Swal from 'sweetalert2'

const SingleProduct = () => {

    const { shoeId } = useParams();
    const [shoeData, setShoeData] = useState({});
    const [mainImg, setMainImg] = useState('');
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        axios.get(`https://intense-sierra-15995.herokuapp.com/singleproduct/${shoeId}`)
            .then(res => {
                setShoeData(res.data);
                console.log(res.data);

            })
    }, [])

    return (
        <div>
            <Header />
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
            <Container>
                <div className='row align-items-center justify-content-between'>
                    <div className='col-lg-7 col-12 product-text row align-items-center'>
                        <div className='col-10'>
                            <img className='img-fluid rounded-3' src={mainImg || shoeData.img} alt="" />
                        </div>
                        <div className='col-2'>
                            <img className='img-fluid my-3 border p-1 rounded-3' src={shoeData.img} alt="" onMouseMove={() => setMainImg(shoeData.img)} />
                            <img className='img-fluid my-3 border p-1 rounded-3' src={shoeData.img1} alt="" onMouseMove={() => setMainImg(shoeData.img1)} />
                            <img className='img-fluid my-3 border p-1 rounded-3' src={shoeData.img2} alt="" onMouseMove={() => setMainImg(shoeData.img2)} />
                            <img className='img-fluid my-3 border p-1 rounded-3' src={shoeData.img3} alt="" onMouseMove={() => setMainImg(shoeData.img3)} />
                        </div>
                    </div>
                    <div className='col-lg-5 col-12 ps-lg-5  mt-lg-0 mt-5'>
                        <h2 className='fw-bolder mb-4'>{shoeData.name}</h2>
                        <div className='d-flex m-0'>
                            <p className='my-0 text-muted'>Category: </p>
                            <p className=' my-0 text-danger ms-3'>{shoeData.category}</p>
                        </div>
                        <div className='d-flex m-0'>
                            <p className='my-0  text-muted'>Availibility: </p>
                            <p className='my-0 ms-3'>In Stock</p>
                        </div>
                        <h2 className="price display-3 fw-bolder mt-4">${shoeData.price}</h2>

                        <p className='mt-4  text-muted'>Size: <span className=' ms-3 border p-2'>{shoeData.size}</span></p>

                        <hr className='my-4' />


                        <p className='text-muted'>{shoeData.description}</p>
                        <div className="d-flex align-items-start justify-content-start mb-3">
                            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="btn btn-outline-secondary me-3" type="button" id="button-addon1"><i class="fas fa-minus"></i></button>

                            <p className='border px-3 pt-2 pb-1 me-3'>{quantity}</p>

                            <button onClick={() => setQuantity(quantity + 1)} className="btn btn-outline-secondary"><i class="fas fa-plus"></i></button>
                        </div>
                        <NavLink to={`/order/${shoeData._id}_${quantity}`} onClick={()=>Swal.fire(
                            'Good job!',
                            'Product Added To Cart Successfully!',
                            'success'
                        )}>
                            <button className="button ">CHECK OUT</button>
                        </NavLink>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default SingleProduct;