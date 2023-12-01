import React from "react";
import Split from "../Split";
import Link from "next/link";
import AboutInfo1Data from "../../data/sections/whyus.json";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h1>{AboutInfo1Data.title}</h1>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                  {AboutInfo1Data.paragraph1}
                </p>
                <p className="wow txt words chars splitting" data-splitting>
                  {AboutInfo1Data.paragraph2}
                </p>

                <p className="wow txt words chars splitting" data-splitting>
                    {AboutInfo1Data.paragraph3}
                </p>

                <p className="wow txt words chars splitting" data-splitting>
                    {AboutInfo1Data.paragraph4}
                </p>

                <p className="wow txt words chars splitting" data-splitting>
                    {AboutInfo1Data.paragraph5}
                </p>
                 
                 <Link href="/contact/contact-dark">
                    <button className="btn btn-theme btn-radius mt-30 wow fadeInUp  ">
                        Contact Us
                    </button>
                 </Link>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
