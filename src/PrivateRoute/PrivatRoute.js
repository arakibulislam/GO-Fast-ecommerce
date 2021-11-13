import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Contex/useAuth';


const PrivatRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className='d-flex justify-content-center align-items-center vh-100'>
            <Spinner animation="grow" variant="warning" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect to={{
                    pathname: '/login',
                    state: { from: location }
                }}>
                </Redirect>
            }
        >
        </Route>
    );
};

export default PrivatRoute;