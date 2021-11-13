import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger me-3'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Confirm!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                axios.put("https://intense-sierra-15995.herokuapp.com/user/admin", data)
                    .then();
                reset();
                swalWithBootstrapButtons.fire(
                    'Success!',
                    'You make admin succefully.',
                    'success'
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                reset();
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    ' :)',
                    'error'
                )
            }
        })

    }
    return (
        <div>
            <div className='banner-4'>
                <div className='d-flex justify-content-center shoe-b-text-1 container mb-5'>
                    <div className='py-lg-4'>
                        <h3>
                            Make Admin
                        </h3>
                    </div>
                </div>
            </div>
            <div className='container'>
                <form className='col-lg-6 col-12 ' onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <label >Please Input Email*</label>
                    <input {...register("email", { required: true })} type='email' placeholder="email" />
                    {errors.email && <span>This field is required</span>}                
                    <input className='button rounded my-2' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;