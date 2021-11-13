import React from 'react';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../Contex/useAuth';
import review from '../../images/review.jpg'

const Reviews = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        axios.post("https://intense-sierra-15995.herokuapp.com/review", data)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Review Post Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset();
                }
            })
    }
    return (
        <div>
            <div className='banner-4'>
                <div className='d-flex justify-content-center shoe-b-text-1 container mb-5'>
                    <div className='py-lg-4'>
                        <h3>
                            User Review
                        </h3>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-6 col-12 order-lg-0 order-1'>
                        <form className='' onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <div className="row align-items-center">
                                <div className='col-lg-6 col-12'>
                                    <label>Name</label>
                                    <input {...register("name", { required: true })} defaultValue={user.displayName} />
                                    {errors.name && <span className='text-danger'>This field is required *</span>}
                                </div>
                                <div className='col-lg-6 col-12'>
                                    <label>User Image</label>
                                    <input type="text" defaultValue={user.photoURL} {...register("image", { required: true })} />
                                </div>
                            </div>

                            <label>Email</label>
                            <input {...register("email", { required: true })} type='email' defaultValue={user.email} />
                            {errors.email && <span className='text-danger'>This field is required *</span>}
                            <div className="row align-items-center">
                                <div className='col-lg-6 col-12'>
                                    <label>Rating</label>
                                    <select className='p-3' {...register("rating")} defaultValue='Please'>
                                        <option value="5">Please Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    {errors.type && <span>This field is required</span>}
                                </div>
                                <div className='col-lg-6 col-12'>
                                    <label>Date</label>
                                    <input type="date" {...register("date", { required: true })} />
                                </div>
                            </div>
                            <label>Review</label>
                            <textarea {...register("review", { required: true })} rows="6"></textarea>
                            {errors.description && <span className='text-danger'>This field is required *</span>}
                            <input className='button rounded' type="submit" />
                        </form>
                    </div>
                    <div className='col-lg-6 col-12 order-lg-1 order-0'>
                        <img className='img-fluid' src={review} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;