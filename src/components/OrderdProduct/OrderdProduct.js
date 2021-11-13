import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import useAuth from '../../Contex/useAuth';

const OrderdProduct = () => {
    const [orderInfo, setOrderInfo] = useState([]);
    const [orderStatus, setOrderStatus] = useState(1);
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`https://intense-sierra-15995.herokuapp.com/order?email=${user.email}`)
            .then(res => {
                setOrderInfo(res.data);
            })
    }, [orderStatus]);
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
        <div className='container'>
            <div className='table-responsive'>
                <table class="table caption-top table-borderless">
                    <caption>Total Order : {orderInfo.length}</caption>
                    <thead class="sidebar text-white">
                        <tr className='text-center'>
                            <th scope="col">#</th>
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
                                <td > <p className="text-center p-2 rounded-3" style={{ color: data.color, backgroundColor: data.background }}>{data.status}</p> </td>
                                <td>
                                    <Button className='button border-0 ' onClick={() => handleDelete(data._id)} >
                                        <i class="far fa-trash-alt me-2"></i> Cancel
                                    </Button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderdProduct;