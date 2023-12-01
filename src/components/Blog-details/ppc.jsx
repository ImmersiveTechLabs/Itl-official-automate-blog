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
                <img src="/img/services/PPC.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="quotes text-center">
                        <p>
                          Along with SEO, we also run PPC advertising campaigns
                          to drive more instant traffic. PPC campaigns are good
                          value for money as you only pay for users who enter
                          your website and there is a higher conversion rate and
                          you can choose to spend as much as you want to. You
                          will also have higher brand recognition through PPC
                          advertising.
                          <br />
                          <br />
                          We can help you get your targeted audience with our
                          top-quality PPC campaigns. Almost ⅓ of the people who
                          search on search engines click on the first link they
                          see. This can help your chances of getting more
                          instant traffic through PPC when someone makes a
                          search related to your keyword
                        </p>
                      </div>
                      <h4 className="extra-title">
                        Keyword Research and Selection
                      </h4>

                      <p>
                        Our PPC specialists collaborate with our SEO executives
                        to find out the keywords that will help you get more
                        traffic. We research and select keywords that are
                        relevant to your business. Through comprehensive
                        analysis, we target high-impact keywords that keep your
                        audience drawn to you. We ensure that your ads reach
                        those who are actively seeking products or services that
                        you sell
                      </p>

                      <h4 className="extra-title">Ad Copywriting and Design</h4>
                      <p>
                        Our ad &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/Content">copywriters</Link>
                        </b>
                        &nbsp; write copies that compel the audience to buy from
                        you. With concise messages and a persuasive tone, we
                        make sure to create attention-grabbing headlines and add
                        persuasive call-to-action(CTAs) to maximize sales. Our
                        ads communicate to the audience the sheer value you
                        provide them.
                      </p>

                      <h4 className="extra-title">
                        Campaign Setup and Configuration
                      </h4>
                      <p>
                        We set up the campaigns for you expertly and swiftly for
                        the best performance. We choose the right ad format for
                        you and configure targeting options for you as well.
                        With our setup, we ensure that the campaigns are
                        well-structured and align with your objectives well.
                      </p>

                      <h4 className="extra-title">
                        Bid Management and Optimization
                      </h4>
                      <p>
                        Our bid management strategies will maximize the
                        effectiveness of your budget. We monitor bids in
                        real-time continuously and adjust them in real time to
                        ensure that you get the best possible ad placements that
                        lie within your budget.
                      </p>

                      <h4 className="extra-title">Ad Performance Tracking</h4>
                      <p>
                        We track the ad performance, including every click and
                        conversion. This is done to assist our &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/AiAndDataAnalytics/">
                            data analysis team
                          </Link>
                        </b>
                        &nbsp; to do better and vice versa. Our analysts provide
                        insights into the ad performance, which helps our PPC
                        team refine strategies, effectively allocate resources,
                        and make decisions based on data purely for ongoing
                        success.
                      </p>
                      <h4 className="extra-title">A/B Testing and Iteration</h4>
                      <p>
                        For the purpose of continuous improvement, we perform
                        A/B testing with the help of our &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/AiAndDataAnalytics/">
                            data analysis team
                          </Link>
                        </b>
                        &nbsp; too. We experiment with different ad elements to
                        unlock the factors that bring success to you. We
                        identify the factors that resonate with your audience
                        and refine our campaigns that way so that you get the
                        most out of your PPC advertisements.
                      </p>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/portfolio/1.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/portfolio/2.jpg" alt="" />
                          </div>
                        </div>
                      </div>

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
                          <a href="#">PPC advertising</a>
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
