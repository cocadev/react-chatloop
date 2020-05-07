import React from 'react';

function FooterComponent() {
    return (
        <div>

            <div className="tap-top">
                <div><i className="fa fa-angle-up" aria-hidden="true"></i></div>
            </div>
            <footer className="cpoy-right-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="social-footer">
                                <ul>
                                    <li><i className="fa fa-facebook text-white" aria-hidden="true"></i></li>
                                    <li><i className="fa fa-google-plus text-white" aria-hidden="true"></i></li>
                                    <li><i className="fa fa-twitter text-white" aria-hidden="true"></i></li>
                                    <li><i className="fa fa-instagram text-white" aria-hidden="true"></i></li>
                                    <li><i className="fa fa-rss text-white" aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <p className="copyright">2018-19 Copyright by themeforest _______ by Pixelstrep </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default FooterComponent;
