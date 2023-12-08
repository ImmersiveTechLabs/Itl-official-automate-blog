/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

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
                <span data-filter=".websites">Websites</span>
                <span data-filter=".post">Social Media</span>
                <span data-filter=".stores">Stores</span>
              </div>
            </div>
          )}

          <div className="gallery full-width">
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items websites `}
              
            >
              <div className="item-img">
                <Link href={`/Services`}>
                  <a className="imago" style={{display:"contents"}}>
                    <img src="/img/portfolio/websites/1.jpg" alt="image"  />
                    {/* <div className="item-img-overlay"></div> */}
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Green Padriatics</h6>
                <span>
                  <Link href="/works3/works3-light">Website</Link>,
                  <Link href="/works3/works3-light">React / Next</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items post `}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/Services`}>
                  <a className="imago " style={{display:"contents"}}>
                    <img src="/img/portfolio/SMP/2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Immersive Techlab</h6>
                <span>
                  <Link href="/works3/works3-light">Secial Media</Link>,
                  <Link href="/works3/works3-light">Design</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items websites `}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/Services`}>
                  <a className="imago " style={{display:"contents"}}>
                    <img src="/img/portfolio/websites/3.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Immersive Animator</h6>
                <span>
                  <Link href="/works3/works3-light">Website</Link>,
                  <Link href="/works3/works3-light">Wordpress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items stores wow`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/Services`}>
                  <a className="imago " style={{display:"contents"}}>
                    <img src="/img/portfolio/websites/2.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Carmel Industries</h6>
                <span>
                  <Link href="/works3/works3-light">Website</Link>,
                  <Link href="/works3/works3-light">Store</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items post wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/Services`}>
                  <a className="imago "style={{display:"contents"}}>
                    <img src="/img/portfolio/SMP/1.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Immersive Animator</h6>
                <span>
                  <Link href="/works3/works3-light">Design</Link>,
                  <Link href="/works3/works3-light">Social Media</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items post wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/Services`}>
                  <a className="imago "style={{display:"contents"}}>
                    <img src="/img/portfolio/SMP/3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Immersive Animator</h6>
                <span>
                  <Link href="/works3/works3-light">Design</Link>,
                  <Link href="/works3/works3-light">Social Media</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
