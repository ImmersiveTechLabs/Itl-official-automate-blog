/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import Data from "../../data/Portfolio.json";

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className=" fadeIn" data-wow-delay=".5s">
                  Portfolio
                </h6>
                <h3 className="wow color-font">
                  Our Recent Web Design &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".website">Websites</span>
                <span data-filter=".design">Social Media</span>
                <span data-filter=".store">Stores</span>
              </div>
            </div>
          )}

          <div className="gallery full-width">


           
           {
              Data.map((item, index) => {
                return(
                  <div
                  key={index}
                  className={`${
                    grid === 3
                      ? "col-lg-4 col-md-6"
                      : grid === 2
                      ? "col-md-6"
                      : "col-12"
                  } items ${item.filter} `}
                  data-wow-delay=".4s"
                >
                  <div className="item-img">
                    <Link href={item.link}>
                      <a className="imago " style={{display:"contents"}}>
                        <img src={item.img} alt="image" />
                        <div className="item-img-overlay"></div>
                      </a>
                    </Link>
                  </div>
                  <div className="cont">
                    <h6>{item.name}</h6>
                    <span>
                      <Link href={item.link}>{item.type}</Link>,
                      <Link href={item.link}>{item.category}</Link>
                    </span>
                  </div>
                </div>
                )
              })
           }


          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
