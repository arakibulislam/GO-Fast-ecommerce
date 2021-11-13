import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Contex/useAuth';
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button, NavDropdown, Dropdown } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../images/trainers.png'
import axios from 'axios';


const Header = () => {
    const { user, logOut,admin } = useAuth();
    const history = useHistory();
    const [changeHeader, setChangeHeader] = useState(false);
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        axios.get(`https://intense-sierra-15995.herokuapp.com/order?email=${user.email}`)
            .then(res => {

                setOrderData(res.data);
            })
    }, [orderData]);

    const logout = () => {
        logOut(history);
    }
    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }
    window.addEventListener('scroll', onChangeHeader)
    return (
        <div className={changeHeader ? " sticky-top   mt-5 " : "sticky-top container mt-5 box-1 "}>
            <Navbar className='box ' collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand className='d-flex align-items-center'>
                        <NavHashLink className='nav-link fw-bold' to="/home#home">  <img className='logo' src={logo} alt="" /></NavHashLink>
                        <h4 className='pt-3 fw-bolder text-muted' ><b><span className='logo-1'>GO</span > FAST</b></h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-lg-auto  d-flex align-items-lg-center align-items-start ms-lg-0">
                            <NavLink className='nav-link ' to="/">HOME</NavLink>
                            <NavLink className='nav-link ' to="/products">SHOES</NavLink>
                            <NavLink className='nav-link ' to="/blogs">BLOGS</NavLink>

                            <NavLink className='nav-link fw-bold position-relative me-5' to="/userorder">
                            <i className="fas fa-shopping-cart fs-5"></i>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {orderData.length}
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </NavLink>

                        </Nav>
                        <Nav className='d-flex align-items-lg-center align-items-start ms-lg-0 '>
                            {!user?.email ? <NavLink className='nav-link' to="/login"><i className="fas fa-user me-2"></i>Log In</NavLink> : <div className='d-flex'>
                                <Dropdown>
                                    <Dropdown.Toggle className='bg-transparent border-0 d-flex align-items-end' id="dropdown-basic">
                                        <img className='user-img me-2 rounded-circle' src={user.photoURL} alt="" />
                                        <p className='text-dark ms-3 mt-3'>{user.displayName}</p>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='border-0 drop p-4 me-5 shadow'>
                                        <div className='  text-center '>
                                            <img className=' me-2 rounded-circle mb-3' src={user.photoURL} alt="" />
                                            <p >
                                                {user.displayName}
                                            </p>
                                            <hr />
                                        </div>
                                        <div className='text-start'>
                                            {admin ? <NavDropdown.Item >
                                                <NavLink className='nav-link' to="/admin">Admin Dashboard</NavLink>
                                            </NavDropdown.Item> : <NavDropdown.Item >
                                                <NavLink className='nav-link' to="/admin">User Dashboard</NavLink>
                                            </NavDropdown.Item>}
                                            <Dropdown.Item href="#/action-3">
                                                {!user?.email ? <NavLink className='nav-link me-2' to="/login"><i className="fas fa-user me-2"></i>Log In</NavLink> : <Button className='button border-0' onClick={logout}><i className="fas fa-sign-out-alt me-2"></i>Logout</Button>}
                                            </Dropdown.Item>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button onClick={logout} className='bg-transparent border-0'> 
                                <i class="fas fa-sign-out-alt fw-bolder fs-3 me-5 text-dark"></i>
                                </Button>
                               
                            </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;