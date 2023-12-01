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
                <img src="/img/services/WDG.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p className="quotes text-center">
                          Fortunately for you though, we offer web development
                          services along with &nbsp;
                          <b className="extra-title">
                            <Link href="/Services/WebDesign">
                              web designing
                            </Link>
                          </b>
                          &nbsp; services. You can now get a website built that
                          shows people that you mean serious business as a brand
                          with our web development services.
                        </p>
                      </div>
                      <h4 className="extra-title">Front-End Development</h4>
                      <p>
                        Our front-end developers breathe life into designs
                        created by our designers. We are all about creating
                        visual and interactive elements using front-end
                        technologies like HTML, CSS, and JavaScript. We make
                        sure to implement the promise made to you by our web
                        design team.
                      </p>

                      <h4 className="extra-title">Back-End Development</h4>

                      <p>
                        Behind the scenes, we develop back-end foundations for
                        your website that power it effectively. With robust
                        technologies and databases, we create a seamless and
                        functional backbone for your website and enable dynamic
                        content, data processing, and user management.
                      </p>

                      <h4 className="extra-title">
                        Content Management Systems (CMS)
                      </h4>

                      <p>
                        With our CMS team, you can simplify your website and
                        content management as per your needs. With our CMS
                        development services, we empower you to update your
                        content, add new pages, and maintain a healthy online
                        presence without having to face technical hurdles.
                      </p>

                      <h4 className="extra-title">E-Commerce Solutions</h4>
                      <p>
                        We offer E-commerce website creation and management
                        solutions with expert-level guidance on how to run your
                        business effectively. We work with Shopify,
                        BigCommerice, WooCommerce, OpenCart, Wix, etc
                        {/* <Link href="/Services/Ecommerce"> */}
                          {/* <a
                            className="butn bord curve mt-40 wow fadeInUp"
                            data-wow-delay=".8s"
                            href="/about/about-light/"
                          > */}
                            {/* <span>Read More</span> */}
                          {/* </a> */}
                        {/* </Link> */}
                      </p>

                      <h4 className="extra-title">
                        Responsive and Mobile Development
                      </h4>
                      <p>
                        To covert more customers, what you need is a website
                        that works well on all devices. We create websites that
                        are responsive on phones as well as other devices, to
                        ensure that maximum numbers of customers get converted.
                        Almost 91% of people purchase online through
                        smartphones, therefore smartphone optimization for
                        websites is very crucial.
                      </p>

                      <h4 className="extra-title">
                        Security and Performance Optimization
                      </h4>
                      <p>
                        When a user visits your website, they must get assurance
                        that your website is safe for online transactions.
                        Otherwise, no user would like to risk their money for a
                        sketchy website. We make sure that your website is
                        secure and optimized for performance as well. We
                        optimize the website to create a smooth, trouble-free,
                        and free-from-worries experience when it comes to
                        payment on websites.
                      </p>

                      <h4 className="extra-title">
                        Ongoing Support and Maintenance
                      </h4>
                      <p>
                        Our relationship doesn-t end after the product launch.
                        We provide ongoing support, troubleshooting, and updates
                        to keep your websites, products, e-commerce stores, etc.
                        running smoothly because we care.
                      </p>

                      <h4 className="extra-title">Tools We Work On</h4>
                      <p>
                        For website development, we are proficient in WordPress,
                        Wix, Squarespace, Drupal, Joomla, Bootstrap, React,
                        Angular, Vue.js, Ruby on Rails, Laravel, Django,
                        Express.js, Flask, and others. <br /> We also know our
                        way to database tools, systems, and technologies like
                        MySQL, PostgreSQL, MongoDB, SQLite, Microsoft SQL
                        Server, Oracle Database, MariaDB, SQLite, Teradata,
                        Amazon RDS (Relational Database Service), Google Cloud
                        SQL, Microsoft Azure SQL Database.
                      </p>

                      <div className="share-info">
                        <div className="social">
                          {/* <a href="#0"> */}
                            <i className="fab fa-facebook-f"></i>
                          {/* </a> */}
                          {/* <a href="#0"> */}
                            <i className="fab fa-twitter"></i>
                          {/* </a> */}
                          {/* <a href="#0"> */}
                            <i className="fab fa-behance"></i>
                          {/* </a> */}
                        </div>
                        <div className="tags">
                          <a href="#0">ITL</a>,<a href="#0">Services</a>,
                          <a href="#">Web Development</a>
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
