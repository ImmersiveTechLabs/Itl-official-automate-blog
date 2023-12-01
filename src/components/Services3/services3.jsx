import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";


const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
        {/* <Link href="/services/webdevelpment" > */}
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Services
              </h6>
              <h3 className="wow color-font">
                We help to create strategies, design &amp; development.
              </h3>
            </div>
          </div>
        {/* </Link> */}
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>Web Development</h5>
              <p>
              We convert your complex designs to fully functioning websites. We work on different languages and frameworks like React js, PHP, Django, etc.
              </p>
              <Link href="/Services/WebDevelopment/">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>Content Writing</h5>
              <p>
              We will write content for you that will convert scrollers into customers. Our quality content writing team knows how to put your quality business into quality words.
              </p>
              <Link href="/Services/Content/">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>Graphic Designing</h5>
              <p>
              Visuals are absolutely important in this era where people have short attention spans. We produce graphics that are appealing and persuasive.
              </p>
              <Link href="/Services/Graphics/">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>SEO Link-Building</h5>
              <p>
              Our quality SEO and link-building experts will convert your sites credibility and enhance your brand’s identity. With us, your website goes to the top of Search Engine rankings.
              </p>
              <Link href="/Services/Seo/">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>


          
        </div>
      </div>
    </section>
  );
};

export default Services3;
