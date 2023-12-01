/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PagesHeader = () => {
  return (
    <header className="pages-header circle-bg valign">
      <div className="container"   style={{maxHeight: "80vh"}}>
        <div className="row justify-content-center">
          <div className="col-lg-14">
            <div className="cont mt-100 mb-50 text-center">
              <h1 className="color-font fw-700">
              Equipped with passionate, skillful, and creative minds, Immersive Tech Lab aims to provide excellent digital services and solutions to its clients. 
              </h1>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="img">
              <img  src="/img/slid/about.jpg" alt="" 
              style={{display: "none"}}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;