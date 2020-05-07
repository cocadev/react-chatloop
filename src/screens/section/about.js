import React from 'react';

export default function AboutSection() {
    return (
        <section className="pb-0 about" id="about">
            <div className="about-chat">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2> About Chat Loop </h2>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="col-md-12 about-box">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 about-border">
                                    <div className="chat-box">                           <img src="images/stay-connected.png" alt="stay-connected" />
                                        <h3 className="sub-title">Stay Connected </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 about-border">
                                    <div className="chat-box"><img src="images/get-notified.png" alt="get-notified" />
                                        <h3 className="sub-title"> Get Notified </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 about-border">
                                    <div className="chat-box"><img src="images/stay-updated.png" alt="stay-updated" />
                                        <h3 className="sub-title">Stay Updated </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="chat-box"><img src="images/mini-world.png" alt="mini-world" />
                                        <h3 className="sub-title">Mini World </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="chat-slide">
                                <h3>Connect with People all ____ the world , with ____ small device </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center"><img className="img-fluid full-banner" src="images/banner.png" alt="banner.png" /></div>
        </section>

    );
}