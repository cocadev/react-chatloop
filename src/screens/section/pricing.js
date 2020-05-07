import React from 'react';

export default function PricingSection() {
    return (
      <section className="theme-bg" id="package">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title">
              <h2 className="text-white">Our Pricing Plans </h2>
              <div className="line white"></div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <div className="plan-slider owl-carousel owl-theme">
              <div className="item">
                <div className="package-box">
                  <h3>Standard </h3>
                  <div className="price-box"><span>$ </span>
                    <h2>49 </h2>
                    <h5 className="plan-clr"><span className="d-block">Year </span></h5>
                  </div>
                  <div className="price-plan text-center">
                    <ul>
                      <li>24/7 On-site Support </li>
                      <li>real time sync </li>
                      <li>unlimited attachment </li>
                      <li>customize theme </li>
                    </ul>
                    <div className="price-plan-btn">Select Plan </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="package-box">
                  <h3>Premium </h3>
                  <div className="price-box"><span>$ </span>
                    <h2>59 </h2>
                    <h5 className="plan-clr"><span className="d-block">Year </span></h5>
                  </div>
                  <div className="price-plan text-center">
                    <ul>
                      <li>real time sync </li>
                      <li>unlimited attachment </li>
                      <li>customize theme </li>
                      <li>priority email support </li>
                    </ul>
                    <div className="price-plan-btn">Select Plan </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="package-box">
                  <h3>Professional </h3>
                  <div className="price-box"><span>$ </span>
                    <h2>69 </h2>
                    <h5 className="plan-clr"><span className="d-block">Year </span></h5>
                  </div>
                  <div className="price-plan text-center">
                    <ul>
                      <li>24/7 On-site Support </li>
                      <li>real time sync </li>
                      <li>customize theme </li>
                      <li>priority email support </li>
                    </ul>
                    <div className="price-plan-btn">Select Plan </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="package-box">
                  <h3>Standard </h3>
                  <div className="price-box"><span>$ </span>
                    <h2>79 </h2>
                    <h5 className="plan-clr"><span className="d-block">Year </span></h5>
                  </div>
                  <div className="price-plan text-center">
                    <ul>
                      <li>24/7 On-site Support </li>
                      <li>unlimited attachment </li>
                      <li>customize theme </li>
                      <li>priority email support </li>
                    </ul>
                    <div className="price-plan-btn">Select Plan </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="package-box">
                  <h3>Extreme </h3>
                  <div className="price-box"><span>$ </span>
                    <h2>49 </h2>
                    <h5 className="plan-clr"><span className="d-block">Year </span></h5>
                  </div>
                  <div className="price-plan text-center">
                    <ul>
                      <li>24/7 On-site Support </li>
                      <li>real time sync </li>
                      <li>customize theme </li>
                      <li>priority email support </li>
                    </ul>
                    <div className="price-plan-btn">Select Plan </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);
}