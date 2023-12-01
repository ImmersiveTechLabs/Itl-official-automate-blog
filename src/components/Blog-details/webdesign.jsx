/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";

const BlogDetails = ({ theme }) => {
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
            <div className="img">
                <img src="/img/services/WD.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p className="quotes text-center">
                          People do not realize how important web design is for
                          their business. A lot of people emphasize their
                          website functionality rather than design. The result?
                          Well whereas a good website does matter in terms of
                          potential, those people do miss out on a lot of more
                          potential customers due to a lack of design present in
                          their website.
                          <br />A good design is key to more nurturing leads and
                          a better conversion rate. It allows the users to
                          navigate your website seamlessly and get a good User
                          Experience(UX). We at ITL know the importance of a
                          good web design that aligns with your brand.
                        </p>
                      </div>
                      <h4 className="extra-title">UI/UX Design</h4>
                      <p>
                        We design a complete user journey from the moment a
                        person enters your website to the point when they buy
                        your services or products. We build an end product that
                        is meant to make things easy for your potential
                        customers or clients. The basic component of a good
                        website is its design, as it provides a positive
                        experience.
                      </p>

                      <h4 className="extra-title">For websites</h4>

                      <p>
                        We make aesthetic, easy-on-the-eyes, and functional
                        website designs that allow users to feel firsthand what
                        your brand is all about. Our designers with their
                        experience know what the website design should be and
                        how good classy websites look and behave. And they put
                        their experience into work and design beautiful websites
                        for you. Our professional developers then put the design
                        into practical application with their top-notch &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/WebDevelopment">
                            web development
                          </Link>
                        </b>
                        &nbsp; services.
                      </p>

                      <h4 className="extra-title">For Applications</h4>

                      <p>
                        Regardless of what you may have known before, the
                        applications retention rate depends totally upon how
                        well it is designed. We build UI/UX designs for
                        applications that ensure that once an application is
                        installed, it stays on the users phone. When the user
                        uses the application, it is easy to use and understand
                        without a complex design and provides an aesthetic and
                        seamless experience for users. Our app developers then
                        convert the design to a fully functioning application in
                        accordance with the &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/Appdevelopment">
                            application development
                          </Link>
                        </b>
                        &nbsp; principles.
                      </p>

                      <h4 className="extra-title">
                        Customized Web Experiences
                      </h4>
                      <p>
                        Along with a general design, what we offer is a fully
                        customized design exactly the way you want, topped with
                        our experienced suggestions to make it even better.
                        Every design element is exclusively chosen to resonate
                        your brands voice to your audience. A customized web
                        design will allow you to have a deeper connection with
                        your audience.
                      </p>

                      <h4 className="extra-title">
                        Designing Beyond Aesthetics
                      </h4>
                      <p>
                        We are not all about aesthetics and colors and stuff.
                        What we do is integrate beautiful aesthetic designs with
                        practicality. Our top priorities remain accessibility,
                        usability, and user delight. We keep in mind the
                        intuitive functionality as well as interaction with the
                        customer which is crucial.
                      </p>

                      <h4 className="extra-title">
                        Navigating Devices Seamlessly
                      </h4>
                      <p>
                        Our talented designers keep in mind the full-time user
                        experience, which is why all the designed websites and
                        web applications are designed in such a way that they
                        are accessible and equally pleasing on all devices. From
                        desktops to mobile phones to tablets, our designs show
                        their class and are equally as good, and leave a
                        long-lasting experience.
                      </p>

                      <h4 className="extra-title">
                        Empowering User Engagement
                      </h4>
                      <p>
                        We build designs that are able to provide interactive
                        experiences. With smart features and animations created
                        with the help of our &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/2d3d">animations</Link>
                        </b>
                        &nbsp; and &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/Graphics">
                            graphic designing
                          </Link>
                        </b>
                        &nbsp; services, we create engagement-driven elements
                        and encourage user participation in your platform. This
                        helps us build that special connection between you and
                        your user.
                      </p>

                      <h4 className="extra-title">
                        Designing for Growth and Impact
                      </h4>
                      <p>
                        Our design isn-t just about flashy colors, pixels, and
                        stuff. What we do is that we strategically incorporate
                        conversion-focused elements, which excite your customers
                        to click on the CTAs and allow higher conversions.
                      </p>
                      <h4 className="extra-title">Tools We Work On</h4>
                      <p>
                      For UI/UX design we use Adobe XD, Sketch, Figma, InVision, Axure RP, Balsamiq, Zeplin, Marvel, Proto.io, UXPin, etc.
                      </p>

                      <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                        <div className="tags">
                          <a href="#0">ITL</a>,<a href="#0">Services</a>,
                          <a href="#">Web Design</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
