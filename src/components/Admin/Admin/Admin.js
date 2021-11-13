import React from 'react';
import AddProducts from '../AddProducts/AddProducts';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, } from 'cdbreact';
import { NavLink, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../Contex/useAuth';
import ManageAll from '../ManageAll/ManageAll';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../../UserDash/MyOrder';
import Payment from '../../UserDash/Payment';
import Reviews from '../../UserDash/Reviews'
import AdminRoute from '../../../AdminRoute/AdminRoute';
import AddBlogs from '../AddBlogs/AddBlogs';

const Admin = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    const history = useHistory();
    const logout = () => {
        logOut(history);
    }
    return (
        <div className='d-flex vh-100' style={{ overflow: 'scroll initial' }}>
            <CDBSidebar className='sidebar ' textColor="#fff">
                <img className='user-img-1 rounded-circle  mt-5' src={user.photoURL} alt="" />
                <CDBSidebarHeader className='text-center'>

                    <p >
                        {user.displayName}
                    </p>
                </CDBSidebarHeader>
                {admin ? <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/" activeClassName="activeClicked ">
                            <CDBSidebarMenuItem><i className="fas fa-home me-3"></i>Home</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to={`${url}`} activeClassName="activeClicked">
                            <CDBSidebarMenuItem><i className="fas fa-shopping-basket me-3"></i>Manage all Order</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to={`${url}/addproduct`} activeClassName="activeClicked">
                            <CDBSidebarMenuItem><i className="fas fa-plus me-3"></i>Add Product</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to={`${url}/manageproducts`} activeClassName="activeClicked">
                            <CDBSidebarMenuItem><i className="fas fa-th-large me-3"></i>Manage Products</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to={`${url}/makeadmin`} activeClassName="activeClicked">
                            <CDBSidebarMenuItem><i className="fas fa-user-plus me-3"></i>Make Admin</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to={`${url}/addblogs`} activeClassName="activeClicked">
                            <CDBSidebarMenuItem><i className="fab fa-blogger-b me-3"></i>Add Blogs</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent> :
                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink exact to="/" activeClassName="activeClicked ">
                                <CDBSidebarMenuItem><i className="fas fa-home me-3"></i>Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={`${url}`} activeClassName="activeClicked">
                                <CDBSidebarMenuItem><i className="fas fa-shopping-basket me-3"></i>My Order</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={`${url}/payment`} activeClassName="activeClicked">
                                <CDBSidebarMenuItem><i className="fab fa-paypal me-3"></i>Payment</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={`${url}/reviews`} activeClassName="activeClicked">
                                <CDBSidebarMenuItem><i className="fas fa-plus me-3"></i>Add Review</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                }

                <CDBSidebarFooter className='mb-4'>
                    <CDBSidebarMenuItem onClick={logout}><i className="fas fa-sign-out-alt fs-5 me-3"></i>Log Out</CDBSidebarMenuItem>
                </CDBSidebarFooter>
            </CDBSidebar>
            <div className='flex-fill overflow-scroll'>
                {admin ? <Switch>
                    <AdminRoute exact path={`${path}`}>
                        <ManageAll />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProducts />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addblogs`}>
                        <AddBlogs />
                    </AdminRoute>
                </Switch> :
                    <Switch>
                        <Route exact path={`${path}`}>
                            <MyOrder />
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment />
                        </Route>
                        <Route path={`${path}/reviews`}>
                            <Reviews />
                        </Route>
                    </Switch>}
            </div>
        </div>
    );
};

export default Admin;