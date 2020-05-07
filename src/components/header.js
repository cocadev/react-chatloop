import React from 'react';

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
                            <li className="nav-item"><a className="nav-link" href="#contact">contact us </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HeaderComponent;
