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
                <img src="/img/services/GD.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p className="quotes text-center">
                          Our designers put their skills to the test along with
                          their creativity and flair, to create effective
                          graphic designs that are meant to attract existing as
                          well as new audiences. From logos and branding
                          materials to promotional materials and social media
                          graphics, the brand message is conveyed effectively
                          and aesthetically.
                        </p>
                      </div>
                      <h4 className="extra-title">Visual Branding Solutions</h4>
                      <p>
                        Our graphic design team crafts brand identities that
                        talk to the audience. We create logos that enclose your
                        business essence as well as comprehensive branding
                        guidelines. Our main priority is ensuring that your
                        visual identity stands out and remains consistent across
                        all points.
                      </p>

                      <h4 className="extra-title">
                        Print and Publication Design
                      </h4>

                      <p>
                        You can elevate your printed materials with designs
                        powered by our talented team. With our visually
                        appealing brochures and posters, we blend creativity and
                        communication which conveys your message effectively to
                        all the users and leaves a good impact on the readers.
                      </p>

                      <h4 className="extra-title">
                        Digital Art and Illustrations
                      </h4>

                      <p>
                        We have in our team digital artists who breathe life
                        into your concepts with accuracy. With illustrations and
                        animations that are creative, we convert your ideas and
                        concepts into masterpieces that keep your audiences
                        engaged and enhance your online presence.
                      </p>

                      <h4 className="extra-title">
                        User-Centric Interface Design
                      </h4>
                      <p>
                        User interface is our thing. We create interfaces that
                        are aesthetic and fully functional. This makes sure that
                        there is seamless navigation and the experience is
                        engaging. With our design, you get user satisfaction and
                        better interaction.
                      </p>

                      <h4 className="extra-title">
                        Cool Visuals for Social Media Platforms
                      </h4>
                      <p>
                        To excel in social media, you need eye-catching visuals.
                        We deliver designs that enhance your social presence
                        through imagery, infographics, and motion graphics. We
                        top it up with the latest trending content on social
                        media, which is analyzed by our &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/Smm">
                            social media marketing
                          </Link>
                        </b>
                        &nbsp; team. It-s about time you convey your message on
                        social media correctly and drive engagement.
                      </p>

                    

                      <h4 className="extra-title">Marketing Collaterals</h4>
                      <p>
                        We also create compelling marketing collaterals,
                        including flyers, posters, and banners that bring
                        engagement and allow you to resonate with your target
                        audience. This will help your business get a
                        professional edge.
                      </p>

                      <h4 className="extra-title">Video Graphics</h4>
                      <p>
                        Video content is what keeps people hooked in this
                        digital age. With our video graphics expertise, you can
                        add visual effects, motion graphics, and animations to
                        your videos making them more engaging and memorable.
                      </p>

                      <h4 className="extra-title">
                        Brand Identity Enhancement
                      </h4>
                      <p>
                        To contribute further to your brands identity, our
                        graphic design and 3D animation team is here. We will
                        make your brand more recognizable and memorable in the
                        minds of your target audience.
                      </p>
                      <h4 className="extra-title">Tools We Work On</h4>
                      <p>
                        For graphic designing, our designers use illustrator, Photoshop or
                        Canva.
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
                          <a href="#">Graphic designing</a>
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
