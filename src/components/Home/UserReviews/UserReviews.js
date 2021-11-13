import React from 'react';
import { RatingView } from 'react-simple-star-rating'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const UserReviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        axios.get('https://intense-sierra-15995.herokuapp.com/review')
            .then(res => {
                setReview(res.data);
            })
    }, [])
    return (
        <div className='py-5'>
            <div className="container">
                <div className=''>
                    <h1 className='display-6 text-center my-5 fw-bolder text-muted'>
                    WHAT CUSTOMERS ARE SAYING
                    </h1>
                </div>
                <div className='row'>
                    {
                        review.map(data =>
                            <div key={data._id} className='col-lg-6 col-12 mb-5 border-bottom'>
                                <div className="testimonial">
                                    <p>{data.review}</p>
                                </div>
                                <div className="media">
                                    <img  src={data.image} className="mr-3 img-fluid" alt="" />
                                    <div className="media-body">
                                        <div className="overview">
                                            <div className="name"><b>{data.name}</b></div>
                                            <div className="details">{data.email}</div>
                                            <div className="star-rating">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"> <RatingView ratingValue={data.rating}/></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default UserReviews;