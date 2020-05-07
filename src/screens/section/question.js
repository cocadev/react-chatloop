import React from 'react';

export default function QuestionSection() {
  return (
    <section className="theme-bg faq" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title">
              <h2 className="text-white">Frequently asked Question </h2>
              <div className="line white"></div>
            </div>
          </div>
        </div>
        <div className="row faq-row">
          <div className="col-lg-6">
            <div className="accordion" id="accordionExample">
              <div className="card mb-3">
                <div className="card-header" id="headingzero">
                  <h5 className="mb-0">
                    <button className="faq-link" type="button" data-toggle="collapse" data-target="#collapsezero" aria-expanded="false" aria-controls="collapsezero">01 We're ready to _____ now <i className="fa fa-angle-down pull-right"></i></button>
                  </h5>
                </div>
                <div className="collapse" id="collapsezero" aria-labelledby="headingzero" data-parent="#accordionExample">
                  <div className="card-body">Lorem ipsum dolor sit ____, consectetur adipisicing elit, sed __ ei temporo incididunt ut ______ et dolore magna aliqua. __ enim ad minim exercitation _______ laboris nisi ut aliquip __ ea commodo consequat. Duis ____ dolor in reprehenderit in _________ velit esse cillum dolore </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="faq-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">02 Sedeiusmod tm inccsetetur ? <i className="fa fa-angle-down pull-right"></i></button>
                  </h5>
                </div>
                <div className="collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">Lorem ipsum dolor sit ____, consectetur adipisicing elit, sed __ ei temporo incididunt ut ______ et dolore magna aliqua. __ enim ad minim exercitation _______ laboris nisi ut aliquip __ ea commodo consequat. Duis ____ dolor in reprehenderit in _________ velit esse cillum dolore </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="faq-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">03 Sedeiusmod inc aliquatraiy? <i className="fa fa-angle-down pull-right"></i></button>
                  </h5>
                </div>
                <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">Lorem ipsum dolor sit ____, consectetur adipisicing elit, sed __ ei temporo incididunt ut ______ et dolore magna aliqua. __ enim ad minim exercitation _______ laboris nisi ut aliquip __ ea commodo consequat. Duis ____ dolor in reprehenderit in _________ velit esse cillum dolore </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="faq-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">04 Tempor inc aliquatraiy? <i className="fa fa-angle-down pull-right"></i></button>
                  </h5>
                </div>
                <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body">Lorem ipsum dolor sit ____, consectetur adipisicing elit, sed __ ei temporo incididunt ut ______ et dolore magna aliqua. __ enim ad minim exercitation _______ laboris nisi ut aliquip __ ea commodo consequat. Duis ____ dolor in reprehenderit in _________ velit esse cillum dolore </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center"><img className="img-fluid" src="images/faq.png" alt="" /></div>
        </div>
      </div>
    </section>
  );
}