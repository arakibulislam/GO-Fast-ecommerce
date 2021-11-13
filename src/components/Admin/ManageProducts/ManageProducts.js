import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { Button } from 'react-bootstrap';

const ManageProducts = () => {
    const [productInfo, setProductInfo] = useState([]);
    const [productStatus, setProductStatus] = useState(1);


    useEffect(() => {
        axios.get("https://intense-sierra-15995.herokuapp.com/product")
            .then(res => {
                setProductInfo(res.data);
            })
    }, [productStatus]);
    const handleDelete = id => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'button',
                cancelButton: 'btn btn-primary me-3'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://intense-sierra-15995.herokuapp.com/deleteProduct/${id}`)
                    .then(res => {
                        setProductStatus(productStatus + 1);
                    })
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your Product has been deleted.',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your Product is safe :)',
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
                            Manage Products
                        </h3>
                    </div>
                </div>
            </div>
            <div className='container'>
            <div className='table-responsive'>
                <table class="table caption-top table-borderless">
                    <caption>Total Order : {productInfo.length}</caption>
                    <thead class="sidebar text-white">
                        <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Avalabile Size</th>
                            <th scope="col">Promotion</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productInfo.map((data, index) => <tr key={data._id} className='text-center '>
                                <th scope="row ">{index + 1}</th>
                                <td>
                                    <div className='d-flex align-items-center justify-content-start text-start'>
                                        <img style={{ width: '50px' }} src={data.img} alt="" />
                                        <div className='ms-3'>
                                            <p className='mb-0'>{data.name}</p>
                                            <p className='mb-0 text-muted'><small>{data.category}</small></p>
                                        </div>
                                    </div>
                                </td>
                                <td>${data.price}</td>
                                <td>{data.size}</td>
                                <td>{data.type}</td>
                                <td>
                                    <Button className='button border-0 ' onClick={() => handleDelete(data._id)} >
                                        <i class="far fa-trash-alt me-2"></i> Delete
                                    </Button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

        </div>
    );
};

export default ManageProducts;