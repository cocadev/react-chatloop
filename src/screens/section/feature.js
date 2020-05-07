import React from 'react';

export default function FeatureSection() {
    return (
        <section className="theme-bg feature" id="feature">
            <div className="container">
                <div className="animation-circle-inverse"><i></i><i></i><i></i></div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2 className="text-white">Chat Loop Feature </h2>
                            <div className="line white"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="future-box">
                            <div className="future-timeline">
                                <ul>
                                    <li className="timeline">
                                        <h4 className="sub-title">Easy Installation </h4>
                                        <p>Lorem Ipsum has been ___ industry's </p>
                                    </li>
                                    <li className="timeline">
                                        <h4 className="sub-title">Multi Platform Chat App </h4>
                                        <p>Lorem Ipsum has been ___ industry's </p>
                                    </li>
                                    <li className="timeline">
                                        <h4 className="sub-title">Secure Backup & Recovery </h4>
                                        <p>Many desktop publishing packages </p>
                                    </li>
                                    <li className="timeline">
                                        <h4 className="sub-title">Easy File Sharing </h4>
                                        <p>Lorem Ipsum has been ___ industry's </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 future-mobile"><img className="img-fluid" src="images/feature-mob.png" alt="feature-mob" /></div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="future-box">
                            <div className="future-timeline-right">
                                <ul className="text-left">
                                    <li className="timeline-right">
                                        <h4>Easy Installation </h4>
                                        <p>Lorem Ipsum has been ___ industry's </p>
                                    </li>
                                    <li className="timeline-right">
                                        <h4>Multi Platform Chat App </h4>
                                        <p>Lorem Ipsum has been ___ industry's </p>
                                    </li>
                                    <li className="timeline-right">
                                        <h4>Secure Backup & Recovery </h4>
                                        <p>Many desktop publishing packages </p>
                                    </li>
                                    <li className="timeline-right">
                                        <h4>Easy File Sharing </h4>
                                        <p>Lorem Ipsum has been ___ industry's </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}