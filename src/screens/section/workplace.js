import React, { useState } from 'react';
import { WorkAtom, WorkHoverAtom } from '../../atoms/works';

export default function WorkPlaceSection() {
    const [i, setI ] = useState(1)
    return (
        <section className="team-bg" id="team">
        <div className="animation-circle-inverse"><i></i><i></i><i></i></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2>Our Work Place {i}</h2>
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="team-slider owl-carousel owl-theme">
                <WorkAtom i={1}/>  
                <WorkAtom i={2}/>  
                <WorkAtom i={3}/>  
              </div>
            </div>
            <WorkHoverAtom i={i}/>
          </div>
        </div>
      </section>
  );
}