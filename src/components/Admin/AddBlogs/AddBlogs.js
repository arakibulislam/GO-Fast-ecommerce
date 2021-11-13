import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Contex/useAuth';
import Swal from 'sweetalert2'
import axios from 'axios';

const AddBlogs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {user} = useAuth();
    const onSubmit = data => { 
        axios.post("https://intense-sierra-15995.herokuapp.com/blogs", data)
        .then(res => {
            if (res.data.acknowledged) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
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
                            Add Blogs
                        </h3>
                    </div>
                </div>
            </div>

            <div className='container'>
                <form className="row " onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    {/* title and description  */}
                    <div className="d-flex flex-column col-lg-6 col-12 ">
                        <label>Blog Title</label>
                        <input {...register("title", { required: true })} />
                        {errors.title && <span className='text-danger'>This field is required *</span>}
                        <label>Blog Description</label>
                        <textarea {...register("description", { required: true })} cols='50' rows="8"></textarea>
                        {errors.description && <span className='text-danger'>This field is required *</span>}
                    </div>

                    <div className="d-flex flex-column col-lg-6 col-12">

                        <label>Writer Name</label>
                        <input {...register("name", { required: true })} defaultValue={user.displayName}/>
                        {errors.name && <span className='text-danger'>This field is required *</span>}

                        <label>Image URL</label>
                        <input {...register("img", { required: true })} />
                        {errors.img && <span className='text-danger'>This field is required *</span>}

                        <label>Date</label>
                        <input type="date" {...register("date", { required: true })} />

                        <input className='button rounded mt-3' type="submit" />

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddBlogs;