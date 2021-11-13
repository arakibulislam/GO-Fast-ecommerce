import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Blogs = () => {
    const [blogData, setblogData] = useState([]);
    useEffect(() => {
        axios.get('https://intense-sierra-15995.herokuapp.com/blogs')
            .then(res => {
                setblogData(res.data)
            })
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                {
                    blogData.map(data =>
                        <div key={data._id} className='col-lg-4 col-md-6 col-12 g-4'>
                            <Card className='border-0 h-100 p-card'>
                                <div className=' overflow-hidden ' style={{ height: '180px' }}>
                                    <Card.Img className='img-1 ' variant="top" src={data.img} />
                                </div>
                                <Card.Body className='text-muted'>

                                    <div className='d-flex justify-content-between'>
                                        <Card.Text>
                                            <b><i class="fas fa-user me-2"></i>{data.name}</b>
                                        </Card.Text>
                                        <Card.Text>
                                            <i className="bi bi-calendar-month me-1"></i> {data.date}
                                        </Card.Text>
                                    </div>
                                    <Card.Title className='fs-5 fw-bold text-muted '> {data.title.slice(0, 30)}</Card.Title>

                                    <Card.Text>
                                        {data.description.slice(0, 50)}
                                    </Card.Text>
                                    <Button className='bg-transparent border-0 text-dark p-0'> Read More<i className="fas fa-arrow-right ms-2"></i></Button>

                                </Card.Body>
                            </Card>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Blogs;