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
                <img src="/img/services/SMM.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p className="quotes text-center">
                          With the power of SMM, our specialists can improve
                          your brand, engage your audience with interesting
                          posts, increase customer service, and impact sales and
                          conversion.
                        </p>
                      </div>
                      <h4 className="extra-title">
                        Platform Selection and Strategy
                      </h4>
                      <p>
                        What sets us apart from others is the fact that we
                        choose the social media platform very carefully. We
                        carry out the selection of the social media platform
                        based on your target audience and business goals. By
                        selecting the right audience, we create a roadmap that
                        makes sure the voice of the brand is effective and gets
                        you engagement.
                      </p>

                      <h4 className="extra-title">
                        Content Planning and Creation
                      </h4>

                      <p>
                        Our &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/Content">
                            content writing team
                          </Link>
                        </b>
                        &nbsp; creates posts that make noise across different
                        social media platforms. From informative articles to
                        visually appealing graphics made by our &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/Graphics">
                            graphic designing team
                          </Link>
                        </b>
                        &nbsp; , we make content strategies that align with your
                        brands voice and improve engagement.
                      </p>

                      <h4 className="extra-title">
                        Community Engagement and Interaction
                      </h4>

                      <p>
                        It is very crucial to build a community. We create
                        interactions, respond to comments accordingly, and
                        initiate conversations to make sure that the audience
                        feels engaged. We engage your target community in a way
                        that it advocates for your brand and ignites organic
                        traffic.
                      </p>

                      <h4 className="extra-title">Paid Social Advertising</h4>
                      <p>
                        You can boost your social media reach and engagement
                        with our paid social advertising services. We create ad
                        campaigns that deliver your message to the audience of
                        your preference and achieve your goals effectively and
                        efficiently.
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
                        Analytics and Performance Measurement
                      </h4>
                      <p>
                        Since we keep a data-driven approach, we make sure to
                        make our data analytics team collaborate with our PPC
                        advertising team to track metrics, analyze campaign
                        performance, and get insights to fine-tune strategies.
                        This will ensure your social media efforts are on track
                        with your objectives.
                      </p>

                      <h4 className="extra-title">Content marketing</h4>
                      <p>
                        We use effective content marketing strategies to
                        attract, retain, and convert new audiences to your
                        business by sharing relevant blogs, content, videos,
                        etc. This helps you to have your brand image set in
                        front of the world. Content marketing is cheap and
                        sustainable for new businesses.
                      </p>

                      <h4 className="extra-title">Email Marketing</h4>
                      <p>
                        We provide email marketing services to make customers
                        aware of new products, deals, and discounts. Email
                        marketing is also a soft way to educate customers about
                        your brand. It is used to increase awareness of your
                        brand among existing customers.
                      </p>

                      <h4 className="extra-title">Brand Marketing</h4>
                      <p>
                        Our brand marketing is effective for growing your
                        business and establishing a connection with your
                        customers. In brand marketing, instead of targeting a
                        specific product, we will make the potential users aware
                        of your brand. It makes your business memorable and
                        makes people engage with you.
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
                          <a href="#">Social Media Marketing</a>
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
