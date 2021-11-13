import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5 pt-5'>
            <section className="deneb_cta ">
                <div className="container">
                    <div className="cta_wrapper ">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="cta_content">
                                    <h3>Get exclusive access to the best of GO FAST</h3>
                                    <p>global community dedicated to bringing out the best in one
                                        another ,GO FAST By You
                                        customization, and special offers. And it's all free.</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="button_box">
                                    <a href="/" className="btn btn-warning">BUY NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="deneb_footer">
                <div className="widget_wrapper" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="widget widegt_about">
                                    <div className="widget_title">
                                        <img src="assets/images/logo_1.png" className="img-fluid" alt="" />
                                    </div>
                                    <p>Membership gives you access to inspiration, community, and exclusive Nike products</p>
                                    <ul className="social">
                                        <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget widget_link">
                                    <div className="widget_title">
                                        <h4>Links</h4>
                                    </div>
                                    <ul>
                                        <li><a href="/">GIFT CARDS</a></li>
                                        <li><a href="/">PROMOTIONS</a></li>
                                        <li><a href="/">BECOME A MEMBER</a></li>
                                        <li><a href="/">SEND US FEEDBACK</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget widget_contact">
                                    <div className="widget_title">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div className="contact_info">
                                        <div className="single_info">
                                            <div className="icon">
                                                <i className="fas fa-phone-alt"></i>
                                            </div>
                                            <div className="info">
                                                <p><a href="/">1800-121-3637</a></p>
                                                <p><a href="/">+91 924-614-7999</a></p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <div className="icon">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="info">
                                                <p><a href="/">gofast@email.com</a></p>
                                                <p><a href="/">akash@gmail.com</a></p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="info">
                                                <p>law 53 1/A, Middle Budda<span>Dhaka.</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright_text">
                                    <p>Copyright &copy; RAKIBUL ISLAM AKASH || 2021 All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;