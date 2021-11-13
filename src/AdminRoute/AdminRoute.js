import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Contex/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    if (isLoading) {
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children :
                <Redirect to={{
                    pathname: '/admin',
                    state: { from: location }
                }}>
                </Redirect>
            }
        >
        </Route>
    );
};

export default AdminRoute;