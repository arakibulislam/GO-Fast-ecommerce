import React from 'react';
import {Container} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Contex/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Registration = () => {
    const { registerUser, loginWithGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.password === data.repassword) {
            console.log(data);
            registerUser(data.email, data.password, data.name, history)
            reset();
        }
    }
    const googleLogin = () => {
        loginWithGoogle(location, history);
    }
    return (
        <div>
            <Header />
            <Container>
                <div className='row my-5'>
                    <h1 className='text-muted my-3'><b>REGISTER</b></h1>
                    <div className="col-lg-6 col-12 pe-lg-5 border-end">
                        <h4 className='text-muted'><b>NEW CUSTOMER</b></h4>
                        <p className='text-muted my-3'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label >Full Name*</label>
                            <input {...register("name", { required: true })} />
                            <label >Email Address*</label>
                            <input {...register("email", { required: true })} type='email' />
                            <label >Password*</label>
                            <input {...register("password", { required: true })} type='password' />
                            <label >Re-type Password*</label>
                            <input {...register("repassword", { required: true })} type='password' />

                            <button type='submit' className='button mt-3'>CONTINUE</button> 
                            <span className='mx-3 fw-bold text-muted'>or</span>
                            <button className='button' onClick={googleLogin} ><i className="fab fa-google me-2"></i>Google Sign In</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-12 ps-lg-5">
                        <h4 className='text-muted'><b>RETURNING CUSTOMER</b></h4>
                        <p className='text-muted'>If you already have an account with us, please login at the <NavLink to='/login'>
                            <span className='text-warning fw-bold text-decoration-underline'>Login page</span>
                        </NavLink></p>

                    </div>
                </div>
            </Container>
            <Footer/>
        </div>
    );
};

export default Registration;