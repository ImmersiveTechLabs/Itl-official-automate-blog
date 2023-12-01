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
                <img src="/img/services/CW.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p className="quotes text-center">
                          The perfect to transform your website is to write
                          quality content that is presented with designs made by
                          a quality &nbsp;
                          <b className="extra-title">
                            <Link href="/Services/WebDesign">
                              graphic design
                            </Link>
                          </b>
                          &nbsp; team. In the context of business, good content
                          should never be underestimated. Good content is what
                          proves to be the difference between an average
                          business and a good business. We offer top-quality
                          content writing services and our writers know how to
                          win the hearts of the buyer, in every scenario.
                        </p>
                      </div>
                      <h4 className="extra-title">Website Content Creation</h4>
                      <p>
                        For your business success, what you need is compelling
                        content on your website that resonates with the voice of
                        your brand and keeps a close connection with your target
                        audience. From landing page content to information about
                        us pages, with our worlds, we capture the attention of
                        the audience and drive visitors to take desired actions.
                      </p>

                      <h4 className="extra-title">SEO Copywriting</h4>

                      <p>
                        With our SEO copywriting services, you can take your
                        online presence to different heights. To make sure that
                        the content is SEO-focused, we pair our writers with
                        &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/Seo">SEO specialists</Link>
                        </b>
                        &nbsp; so that their collaboration and communication
                        give existence to content that is grammatically correct
                        and on point in terms of the SEO. With us, you can get
                        content that is optimized for search engines with good
                        readability and relevance for both the users and the
                        search engine algorithms.
                      </p>

                      <h4 className="extra-title">Blog and Article Writing</h4>

                      <p>
                        To fuel your content marketing strategy, you need
                        well-written blogs and article services provided by our
                        writers. We are all about research, and our writers
                        craft informative and engaging pieces that will
                        eventually establish your authority with the readers and
                        resonate with them so that you can have a deeper
                        connection.
                      </p>

                      <h4 className="extra-title">Social Media Content</h4>
                      <p>
                        Dif you know that content on social media platforms is a
                        different way of writing for maximum reach? Our writers
                        certainly know that. With the help of our &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/Smm">
                            social media marketing team
                          </Link>
                        </b>
                        &nbsp; and our talented content writers, you can make
                        the vibe of your social media platforms shine. We create
                        posts that are in accordance with the trends and drive
                        engagements. Our content conveys your message and aligns
                        your brands personality on social media platforms as
                        well.
                      </p>

                      <h4 className="extra-title">Creative Writing Services</h4>
                      <p>
                        We believe in beyond-the-ordinary content writing
                        services. Our creative writers inject uniqueness into
                        your content, which makes it stand out. From imaginative
                        storytelling to persuasive narratives, we write content
                        that is memorable using metaphors that make perfect
                        sense.
                      </p>

                      <h4 className="extra-title">
                        Secure Payment Gateway Integration
                      </h4>
                      <p>
                        Your customers data is crucial, therefore it is
                        essential that the data is secured via secure payment
                        gateway integrations so that the shoppers have peace of
                        mind and trust in you during the checkout process.
                      </p>

                      <h4 className="extra-title">Editing and Proofreading</h4>
                      <p>
                        Sometimes the content is fully written, but it needs a
                        professional touch to flourish. Publishing your words is
                        our expertise. We edit and proofread your content to
                        make it free from errors, and to make it sound
                        professional and correct. Our content maintains a
                        consistent style and grammatical accuracy so that you
                        have a polished final product.
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
                          <a href="#">Content Writing</a>
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
