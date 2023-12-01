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
                <img src="/img/services/SD.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p className="quotes text-center">
                          For businesses, software development is crucial. Every
                          business that wants to grow needs software solutions
                          that assist their workflow. From CRMs to ERPs, we
                          create custom software solutions for your business to
                          take it to the next level.
                        </p>
                      </div>
                      <h4 className="extra-title">
                        Enterprise Software Solutions
                      </h4>
                      <p>
                        With our enterprise software solutions, you can
                        streamline complex processes and enhance operational
                        efficiency within your organization. Our enterprise
                        solutions are customized exactly according to your needs
                        and comprehensive software development optimizes
                        resource management, data handling, and collaboration,
                        which will enable you to scale your business further and
                        enhance your operations.
                      </p>

                      <h4 className="extra-title">ERP System Development</h4>

                      <p>
                        With our ERP system development, business management
                        becomes easy. With our expertly created software, you
                        can get your data centralized, processes automated, and
                        get real-time insights through your data. This can help
                        your business achieve new heights and will make you one
                        of the big fishes in the market. With our ERP system
                        development, you can make informed decisions and drive
                        growth.
                      </p>

                      <h4 className="extra-title">CRM Software Development</h4>

                      <p>
                        Every business revolves around customers and their
                        satisfaction. With our CRM software development, you can
                        elevate your customer relations which will make your
                        business stand apart from others. Our software
                        development team builds platforms that manage
                        interactions, analyze data, and improve engagement. With
                        our CRM software development, you can build those
                        lasting relations with your customers and optimize
                        customer experience
                      </p>

                      <h4 className="extra-title">
                        Cross-Platform Development
                      </h4>
                      <p>
                        We have experts in our team who develop applications on
                        cross-platform application development frameworks and
                        technologies like Ionic, Codename One, etc.
                      </p>

                      <h4 className="extra-title">
                        E-Commerce Platform Development
                      </h4>
                      <p>
                        Looking to launch your online business? Weve got you
                        fully covered. Our software developers interact with our
                        services team to create software that helps you launch
                        and expand your online business. With our robust and
                        user-friendly platforms, we enable secure transactions,
                        product management, and customer engagement and make
                        your brand better.
                      </p>

                      <h4 className="extra-title">
                        Business Process Automation
                      </h4>
                      <p>
                        You can automate your workflow for better efficiency
                        with our business process automation solutions. Our
                        software streamlines repetitive tasks, reduces errors,
                        and frees up valuable resources so that your business
                        can focus on high-value activities
                      </p>

                      <h4 className="extra-title">
                        Custom Software Integration
                      </h4>
                      <p>
                        With our custom software integration services,
                        connecting your systems has become easy. We build
                        mediums that enable different software to communicate
                        effectively and optimize data sharing. This helps
                        improve and enhance cross-functional efficiency.
                      </p>

                      <h4 className="extra-title">
                        Ongoing Support and Maintenance
                      </h4>
                      <p>
                        We keep our commitment beyond the deployment of software
                        and provide ongoing maintenance and support for 6 months
                        for free.
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
                          <a href="#">Software Development</a>
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
