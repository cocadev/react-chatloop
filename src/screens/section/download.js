import React from 'react';

export default function DownloadSection() {
    return (
        <section className="download-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 display-flex">
                        <div className="footer-logo"><img className="img-fluid" src="images/footer-logo.png" alt="footer-logo" /></div>
                    </div>
                    <div className="col-xl-5 display-flex">
                        <div className="download-text">
                            <h3>Download the Chatloop app ___ enjoy it </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 display-flex">
                        <div className="download-img">
                            <ul>
                                <li><img className="img-fluid" src="images/app1.png" alt="foot-app" data-tilt="" data-tilt-perspective="50" data-tilt-speed="350" data-tilt-max="1.8" /></li>
                                <li><img className="img-fluid" src="images/app2.png" alt="foot-app1" data-tilt="" data-tilt-perspective="50" data-tilt-speed="350" data-tilt-max="1.8" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}