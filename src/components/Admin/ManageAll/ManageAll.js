import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2'

const ManageAll = () => {
    const [orderInfo, setOrderInfo] = useState([]);
    const [orderStatus, setOrderStatus] = useState(1);

    useEffect(() => {
        axios.get("https://intense-sierra-15995.herokuapp.com/allorder")
            .then(res => {
                setOrderInfo(res.data);
            })
    }, [orderStatus]);

    const handleStatus = id => {
        axios.put(`https://intense-sierra-15995.herokuapp.com/status/${id}`)
            .then(res => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                setOrderStatus(orderStatus + 1);
            })
    }

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
                axios.delete(`https://intense-sierra-15995.herokuapp.com/deleteOrder/${id}`)
                    .then(res => {
                        setOrderStatus(orderStatus + 1);
                    })
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your Order has been deleted.',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your Order is safe :)',
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
                           Manage All Order
                        </h3>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='table-responsive'>
                    <table class="table caption-top table-borderless">
                        <caption>Total Order : {orderInfo.length}</caption>
                        <thead class="sidebar text-white">
                            <tr className='text-center'>
                                <th scope="col">#</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Product</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderInfo.map((data, index) => <tr key={data._id} className='text-center '>
                                    <th scope="row ">{index + 1}</th>
                                    <td>
                                        <div className='d-flex align-items-center justify-content-start text-start'>
                                            <img style={{ width: '50px' }} src={data.photoURL} alt="" />
                                            <div className='ms-3'>
                                                <p className='mb-0'>{data.name}</p>
                                                <p className='mb-0 text-muted'><small>{data.email}</small></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center justify-content-start text-start'>
                                            <img style={{ width: '50px' }} src={data.productImage} alt="" />
                                            <div className='ms-3'>
                                                <p className='mb-0'>{data.productName}</p>
                                                <p className='mb-0 text-muted'><small>{data.productCt}</small></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${data.totalAmmount}</td>
                                    <td>{data.quantity}</td>
                                    <td>{data.orderDate}</td>
                                    <td > <p className="text-center p-2 rounded-3" style={{ color: data.color2, backgroundColor: data.background2 }}>{data.status2}</p> </td>
                                    <td>
                                        {
                                            data?.status === 'pending' && <Button className='btn btn-success me-2' onClick={() => handleStatus(data._id)} >
                                                <i className="fas fa-clipboard-check"></i>
                                            </Button>
                                        }
                                        <Button className='button border-0 ' onClick={() => handleDelete(data._id)} >
                                            <i class="far fa-trash-alt "></i>
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

export default ManageAll;