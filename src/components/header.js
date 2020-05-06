import React from 'react';
import { Link } from "react-router-dom";

function HeaderComponent() {
    return (
        <div>
            <div className="loader-wrapper">
                <div id="loader">
                    <div id="shadow"></div>
                    <div id="box"></div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg theme-nav fixed-top">
                <div className="container"><a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"><i className="fa fa-align-justify" aria-hidden="true"></i></span></button>
                    <div className="collapse navbar-collapse" id="mainmenu">
                        <ul className="navbar-nav ml-auto" id="mymenu">
                            <li className="nav-item"><a className="nav-link" href="#home">Home </a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">about </a></li>
                            <li className="nav-item"><a className="nav-link" href="#feature">feature </a></li>
                            <li className="nav-item"><a className="nav-link" href="#screenshots">screenshot </a></li>
                            <li className="nav-item"><a className="nav-link" href="#team">team </a></li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#news" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><Link to ='/blog'>blog list </Link></li>
                                    <li className="nav-item"><a className="nav-link" href="blog-details.html">blog details </a></li>
                                    <li className="nav-item"><a className="nav-link" href="blogs-leftside.html">leftsidebar </a></li>
                                    <li className="nav-item"><a className="nav-link" href="blogs-rightside.html">rightsidebar </a></li>
                                    <li className="nav-item"><a className="nav-link" href="blog-details-with-leftsidebar.html">details leftsidebar </a></li>
                                    <li className="nav-item"><a className="nav-link" href="blog-details-with-rightsidebar.html">details rightsidebar </a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#contact">contact us </a></li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other Page </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="nav-link" href="sign-in.html">Sign In </a></li>
                                    <li className="nav-item"><a className="nav-link" href="sign-up.html">Sign Up </a></li>
                                    <li className="nav-item"><a className="nav-link" href="forgot-pass.html">Forget Password </a></li>
                                    <li className="nav-item"><a className="nav-link" href="thank-you.html">Thank You </a></li>
                                    <li className="nav-item"><a className="nav-link" href="review.html">Review </a></li>
                                    <li className="nav-item"><a className="nav-link" href="faq.html">FAQ </a></li>
                                    <li className="nav-item"><a className="nav-link" href="coming-soon.html">Coming Soon </a></li>
                                    <li className="nav-item"><a className="nav-link" href="download.html">Download </a></li>
                                    <li className="nav-item"><a className="nav-link" href="request.html">Request Demo </a></li>
                                    <li className="nav-item"><a className="nav-link" href="404.html">404 </a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HeaderComponent;
