import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import useAuth from '../../Contex/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Swal from 'sweetalert2'

const Order = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { orderId } = useParams();
    const productId = orderId.split("_")[0];
    const orderQuantity = orderId.split("_")[1];
    const [orderData, setOrderData] = useState({});
    const { user } = useAuth();
    const history = useHistory();
    const [quantity, setQuantity] = useState(parseInt(orderQuantity));
    useEffect(() => {
        axios.get(`https://intense-sierra-15995.herokuapp.com/singleproduct/${productId}`)
            .then(res => {
                setOrderData(res.data);


            })
    }, [])
    const onSubmit = data => {
        const orderDate = new Date();
        const orderInfo = {
           productName: orderData.name, photoURL: user.photoURL, productImage : orderData.img, productCt: orderData.category  , quantity , productPrice : orderData.price , totalAmmount : quantity * orderData.price , orderDate : orderDate.toLocaleDateString(), ...data, status: 'pending', color : '#fca000', background: '#ffaa003a', status2: 'pending', color2 : '#fca000', background2: '#ffaa003a'
        }
        console.log(data);
        if(data.email){
            axios.post("https://intense-sierra-15995.herokuapp.com/order",orderInfo)
        .then(res=>{
            if(res.data.insertedId){
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Order Placed Successfully',
                    text: `Product Name: ${orderData.name} | Quantity: ${quantity}`,
                  })
                  history.push('/products')
            }
        })
        }
        else{
            reset();
        }
    };
    useEffect(() => {
        reset()
    }, [orderData])

    return (
        <div>
            <Header />
            <div className='banner-3'>
                <div className='d-flex justify-content-end shoe-b-text container'>
                    <div>
                        <h1>
                            Order Details
                        </h1>
                        <NavLink className='nav-link p-0 text-white' to='/products'>
                            <p><i className="fas fa-arrow-left"></i> All Shoes</p>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Container>
                <div className='row align-items-center justify-content-between'>
                    <div className='col-lg-6 col-12  order-lg-0 order-1'>
                        <h2 className='price fs-1 fw-bolder mb-3'>
                            Billing Details
                        </h2>
                        <form className='' onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <input {...register("name", { required: true })} defaultValue={user.displayName} />
                            {errors.name && <span>This field is required</span>}
                            <input {...register("email", { required: true })} defaultValue={user.email} />
                            {errors.email && <span>This field is required</span>}
                            <input {...register("address", { required: true })} placeholder='Address' />
                            {errors.address && <span>This field is required</span>}
                            <input {...register("city", { required: true })} placeholder='City' />
                            {errors.img && <span>This field is required</span>}
                            <div className='d-flex flex-lg-row flex-column'>
                                <select {...register("country")} placeholder="Country" defaultValue='Bangladesh' className='me-2'>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="India">India</option>
                                    <option value="Pakisthan">Pakisthan</option>
                                </select>
                                {errors.country && <span>This field is required</span>}
                                <input {...register("code", { required: true })} placeholder='Postal Code' />
                                {errors.code && <span>This field is required</span>}
                            </div>
                            <button type='submit' className="button mt-3">PLACE ORDER</button>
                        </form>
                    </div>
                    <div className='col-lg-6 col-12  ps-lg-5 mb-lg-0 mb-5 order-lg-1 order-0'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center'>
                                <div className='w-25'>
                                    {/* <img className='img-fluid' src={orderData.img} alt="" /> */}
                                    <div className="photo-container">
                                        <div className="product-image">
                                            <a href="/" className="image">
                                                <img className="pic-1" src={orderData.img} />
                                                <img className="pic-2" src={orderData.img2} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='ms-3'>
                                    <h5>{orderData.name}</h5>
                                    <p><small>Size: {orderData.size}</small></p>
                                </div>
                            </div>
                            <div>
                                <h5>${orderData.price}</h5>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <h5>Product Quantity</h5>
                            <div className="d-flex align-items-start justify-content-start mb-3">
                                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="btn btn-outline-secondary me-3" type="button" id="button-addon1"><i class="fas fa-minus"></i></button>

                                <p className='border px-3 pt-2 pb-1 me-3'>{quantity}</p>

                                <button onClick={() => setQuantity(quantity + 1)} className="btn btn-outline-secondary"><i class="fas fa-plus"></i></button>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5>
                                Total
                            </h5>
                            <h4 className='price fs-3 fw-bold'>
                                ${parseInt(orderData.price) * quantity}
                            </h4>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Order;