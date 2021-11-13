import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';


const AddProducts = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        axios.post("https://intense-sierra-15995.herokuapp.com/product", data)
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
        <div className=''>
            <div className='banner-4'>
                <div className='d-flex justify-content-center shoe-b-text-1 container mb-5'>
                    <div className='py-lg-4'>
                        <h3>
                            Add Products
                        </h3>
                    </div>
                </div>
            </div>

            <div className='container'>
            <form className='' onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <input {...register("name", { required: true })} placeholder="Product Name" />
                {errors.name && <span>This field is required</span>}
                <br />
                <div className='d-flex flex-lg-row flex-column'>
                    <select {...register("type")} className='me-2'>
                        <option value="SALE">Sale</option>
                        <option value="HOT">Hot</option>
                        <option value="NEW">New</option>
                    </select>
                    {errors.type && <span>This field is required</span>}
                    <input {...register("category", { required: true })} placeholder="Category" />
                    {errors.category && <span>This field is required</span>}
                </div>
                <div className='d-flex'>
                    <input className='me-2' type="number" {...register("price", { required: true })} placeholder="Price" />
                    {errors.price && <span>This field is required</span>}
                    <input {...register("size", { required: true })} placeholder="Size" />
                    {errors.size && <span>This field is required</span>}
                </div>
                <input {...register("description", { required: true })} placeholder='Description' />
                {errors.description && <span>This field is required</span>}
                <input {...register("img", { required: true })} placeholder='Image url' />
                {errors.img && <span>This field is required</span>}
                <input {...register("img1", { required: true })} placeholder='Image url' />
                {errors.img && <span>This field is required</span>}
                <input {...register("img2", { required: true })} placeholder='Image url' />
                {errors.img && <span>This field is required</span>}
                <input {...register("img3", { required: true })} placeholder='Image url' />
                {errors.img && <span>This field is required</span>}
                <br /><br />
               <div className="w-50 ms-auto">
               <input className='button rounded ' type="submit" />
               </div>
            </form>
            </div>
        </div>

    );
};

export default AddProducts;