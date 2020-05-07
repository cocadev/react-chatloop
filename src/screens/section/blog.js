import React from 'react';

export default function BlogSection() {
    return (
        <section className="team-bg" id="news">
            <div className="animation-circle-inverse"><i></i><i></i><i></i></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center">
                        <div className="section-title">
                            <h2>Our Recent Blog </h2>
                            <div className="line"></div>
                            <p>
                                Lorem ipsum dolor ___ amet, consectetur adipisicing elit. ___ autem voluptatem obcaecati!
                                ipsum _____ sit Rem autem voluptatem _________
                </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="news-slider owl-carousel owl-theme">
                            <div className="item news-slid">
                                <div className="news-box"><a href="blog-details.html"><img className="img-fluid" src="images/blog/1.jpg" alt="news-1" /></a>
                                    <div className="blog-hover">
                                        <h4>lorem ipsum dolor sit ____ </h4>
                                        <ul className="list-inline blog-details-list">
                                            <li className="text-white">John Doe</li>
                                            <li className="text-white">1 Oct</li>
                                            <li className="text-white">25 comments</li>
                                            <li className="text-white">3 View</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="news-text">
                                    <p>lorem ipsum dolor sit ____, consecteturamet adipisicing elit, tempor __________ ut labore. lorem ipsum _____ sit amet. </p><a className="btn-theme" href="blog-details.html">View more </a>
                                </div>
                            </div>
                            <div className="item news-slid">
                                <div className="news-box"><a href="blog-details.html"><img className="img-fluid" src="images/blog/2.jpg" alt="news-1" /></a>
                                    <div className="blog-hover">
                                        <h4>lorem ipsum dolor sit ____ </h4>
                                        <ul className="list-inline blog-details-list">
                                            <li className="text-white">John Doe</li>
                                            <li className="text-white">2 Oct</li>
                                            <li className="text-white">25 comments</li>
                                            <li className="text-white">3 View</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="news-text">
                                    <p>lorem ipsum dolor sit ____, consecteturamet adipisicing elit, tempor __________ ut labore. lorem ipsum _____ sit amet. </p><a className="btn-theme" href="blog-details.html">View more </a>
                                </div>
                            </div>
                            <div className="item news-slid">
                                <div className="news-box"><a href="blog-details.html"><img className="img-fluid" src="images/blog/3.jpg" alt="news-1" /></a>
                                    <div className="blog-hover">
                                        <h4>lorem ipsum dolor sit ____ </h4>
                                        <ul className="list-inline blog-details-list">
                                            <li className="text-white">John Doe</li>
                                            <li className="text-white">3 Oct</li>
                                            <li className="text-white">25 comments</li>
                                            <li className="text-white">3 View</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="news-text">
                                    <p>lorem ipsum dolor sit ____, consecteturamet adipisicing elit, tempor __________ ut labore. lorem ipsum _____ sit amet. </p><a className="btn-theme" href="blog-details.html">View more </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}