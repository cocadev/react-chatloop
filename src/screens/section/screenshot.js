import React from 'react';

export default function ScreenshotSection() {
    return (
        <section className="theme-bg screenshots" id="screenshots">
            <div className="animation-circle"><i></i><i></i><i></i></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2 className="text-white">Chat Loop Screen Shot </h2>
                            <div className="line white"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="swiper-screenshots-container-1 swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><img src="images/ss/1.png" alt="1" /></div>
                                <div className="swiper-slide"><img src="images/ss/2.png" alt="2" /></div>
                                <div className="swiper-slide"><img src="images/ss/3.png" alt="3" /></div>
                                <div className="swiper-slide"><img src="images/ss/4.png" alt="4" /></div>
                                <div className="swiper-slide"><img src="images/ss/1.png" alt="5" /></div>
                                <div className="swiper-slide"><img src="images/ss/2.png" alt="5" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}