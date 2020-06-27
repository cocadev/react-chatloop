import React from 'react';

export default function SlideSection() {
    return (
        <section className="slide-bg" id="home">
            <div className="animation-circle"><i></i><i></i><i></i></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex-1">
                            <div className="slide-text">
                                <div>
                                    <h1>The best way to  with your friends  <span className="main-title">  ChatLoop! </span></h1>
                                    <h4>Lorem Ipsum is simply text of the printing typesetting industry.  </h4>
                                    <div className="slid-btn">
                                        <img className="img-fluid" style={{ marginRight: 20 }} src="images/app1.png" alt="app1" data-tilt="" data-tilt-perspective="50" data-tilt-speed="350" data-tilt-max="1.8" />
                                        <img className="img-fluid" src="images/app2.png" alt="app2" data-tilt="" data-tilt-perspective="50" data-tilt-speed="350" data-tilt-max="1.8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="home-right">
                            <div className="mobile-slid"><img className="img-fluid" src="images/top-mobile.png" alt="top1" /></div>
                            <div className="profile-msg"><img className="img-fluid" src="images/top2.png" alt="top2" /></div>
                            <div className="awesome"><img className="img-fluid" src="images/top3.png" alt="top3" /></div>
                            <div className="profile-1"><img className="img-fluid" src="images/top4.png" alt="top4" /></div>
                            <div className="emoji"><img className="img-fluid" src="images/top5.png" alt="top5" /></div>
                            <div className="profile-2"><img className="img-fluid" src="images/top1.png" alt="top1" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}