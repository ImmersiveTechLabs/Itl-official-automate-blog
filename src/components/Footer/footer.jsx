/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>Westbury tower, Business bay, Dubai, UAE., Dubai, United Arab Emirates</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>hello@immersivetechlab.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+971582632774</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent Blogs</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog/business-services-a-good-career-path">
                      <a>
                        <img src="/img/blog1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog/business-services-a-good-career-path">
                      <a>
                        <p>
                        Learn if business services is a good career path...
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/business-services-a-good-career-path">
                      <a>
                        <span className="date">17 Nov 2023</span>
                      </a>
                    </Link>
                  </div>
                </li>
              



                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="https://www.facebook.com/immersivetechlabs/"  target="_blank" rel="noreferrer" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                {/* <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="https://www.instagram.com/immersivetechlabs/?hl=en"  target="_blank" rel="noreferrer" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://ae.linkedin.com/company/immersivetechlabs"  target="_blank" rel="noreferrer" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCXj3Tglg6fr3A8vrxYDQNJQ" target="_blank" rel="noreferrer" className="icon">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                     Copyright © 2023 ImmersiveTechlab
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
