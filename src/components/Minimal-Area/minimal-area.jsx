/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About us.</h4>
              <p className="wow txt" data-splitting>
                Our creative Ad agency is ranked among the finest in the US. We
                cultivate smart ideas for start-ups and seasoned players.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our History
                  </h6>
                  <p>
                  Immersive Tech Lab started in 2022, with an aim to help new and existing businesses become better in the UAE. Over time, our small team has grown into a big group of talent that merges creativity with technical expertise. 
{/* <br />
Over the years, ITL has gained recognition for its unique approach with many satisfied clients in the USA as well. As Dubai continued to grow as a global tech and business hub, Immersive Tech Lab's portfolio expanded as well. 
<br />
Today, Immersive Tech Lab stands tall as a leading development and digital marketing agency in Dubai and North America, admired for its quality of work on numerous projects */}

                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Mission
                  </h6>
                  <p>
                  At ITL, our mission is to help brands scale through digital marketing. We continue to transform small businesses into digital powerhouses with the power of digital marketing and high-quality development services. Our team has a thing for pushing boundaries and we will continue to do so, using innovative techniques to unlock dream digital success! 
                  </p>
                </li>
                {/* <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
