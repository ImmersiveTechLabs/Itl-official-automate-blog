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
                <img src="/img/services/SEO.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p className="quotes text-center">
                          Our digital marketing specialists provide expertise in
                          Search Engine Optimization (SEO), to make your website
                          visible on search engines at a higher rank. Ranking
                          high on search engines means that your website is
                          legitimate, and you can gather more traffic and have a
                          higher conversion rate.
                        </p>
                      </div>
                      <h4 className="extra-title">
                        Keyword Research and Analysis
                      </h4>
                      <p>
                        Our SEO experts carry out detailed research and find out
                        the keywords that your audience is searching for. This
                        helps our &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/Content">content writers</Link>
                        </b>
                        &nbsp; with relevant content creation and optimization.
                        With thorough research, we identify high-impact keywords
                        that enhance your visibility and drive organic traffic
                        to your website.
                      </p>

                      <h4 className="extra-title">On-Page SEO Optimization</h4>

                      <p>
                        With correctly done on-page SEO with the help of our SEO
                        specialists, you can take your online visibility and
                        presence to a different dimension. With fine-tuning, we
                        optimize key factors like meta tags, content structure,
                        keyword density, and internal linking to align your site
                        with the search engine algorithms. With your help, you
                        can boost your pages relevance and search engine
                        ranking.
                      </p>

                      <h4 className="extra-title">Off-Page SEO Strategies</h4>

                      <p>
                        Our off-page SEO service is the most crucial; it builds
                        authoritative connections with others. Through
                        high-quality backlinks, brand mentions, and social
                        engagement, we increase the credibility of your site and
                        demonstrate its value to others.
                      </p>

                      <h4 className="extra-title">Technical SEO Audit</h4>
                      <p>
                        When the on and off-page SEO is right but your website
                        still struggles to rank higher, there may be an issue
                        with the technical SEO of your site. We uncover hidden
                        potentials with our technical SEO audit. We examine site
                        architecture, indexability, site speed, and other
                        factors so that the standards of search engines are
                        achieved and that the site achieves crawlability and UX.
                      </p>

                      <h4 className="extra-title">Local SEO Solutions</h4>
                      <p>
                        Its important to drive foot traffic from local SEO. We
                        optimize your online presence for local searches so that
                        your business appears in map listings and local
                        directories. Local searches are greeted with your
                        website, which connects you to nearby customers.
                      </p>

                      <h4 className="extra-title">
                        SEO Reporting and Analytics
                      </h4>
                      <p>
                        We create comprehensive SEO reports fueled by our data
                        analytics team. This helps make data-driven decisions
                        and get more insights into keyword ranking, traffic
                        sources, and user behavior. Our SEO reporting and
                        analytics team will allow you to keep track of your
                        progress and make new strategies accordingly.
                      </p>

                      <h4 className="extra-title">Tools We Work On</h4>
                      <p>
                        For SEO, we are proficient in using Google Search
                        Console, Google Analytics, SEMrush, Ahrefs, Moz,
                        Screaming Frog SEO Spider, etc.
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
                          <a href="#">SEO</a>
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
