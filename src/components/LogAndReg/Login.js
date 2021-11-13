import React from 'react';
import {Container} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Contex/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';



const Login = () => {
    const { loginWithGoogle, loginUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    const redirectLink = () => {
        history.push(redirect_url)
    }

    const googleLogin = () => {
        loginWithGoogle(location, history);
    }

    const onSubmit = data => {
        console.log(data);
        loginUser(data.email, data.password, redirectLink);
    }
    return (
        <div>
            <Header />
            <Container className=''>
                <div className='row my-5'>
                    <h1 className='text-muted my-3'><b>LOGIN</b></h1>
                    <div className="col-lg-6 col-12 pe-lg-5 border-end">
                        <h4 className='text-muted'><b>RETURNING CUSTOMER</b></h4>
                        <h5 className='text-muted my-3'>I am a returning customer</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label >Email Address*</label>
                            <input {...register("email", { required: true })} type='email' />
                            <label >Password*</label>
                            <input {...register("password", { required: true })} type='password' />

                            <button type='submit' className='button mt-3'>LOGIN</button> <span className='mx-3 fw-bold text-muted'>or</span>
                            <button className='button' onClick={googleLogin} ><i className="fab fa-google me-2"></i>Google Sign In</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-12 ps-lg-5">
                        <h4 className='text-muted'><b>NEW CUSTOMER</b></h4>
                        <h5 className='text-muted my-3'>Register Account</h5>
                        <p className='text-muted'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                        <NavLink to='/register'>
                            <button className='button mt-3'>CONTINUE</button>
                        </NavLink>
                    </div>
                </div>
            </Container>
            <Footer/>
        </div>
    );
};

export default Login;