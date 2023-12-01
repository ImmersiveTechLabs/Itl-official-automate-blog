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
                <img src="/img/services/AD.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p className="quotes text-center">
                          Our application development team will make sure that
                          your brand identity and customer connection are taken
                          to a new level and that you reach new heights in terms
                          of your sales and reach a different worldwide audience
                          base.
                        </p>
                      </div>
                      <h4 className="extra-title">Mobile App Development</h4>
                      <p>
                        We convert your application vision into reality. Our
                        experts create applications for both Andriod and iOS and
                        ensure that performance is up to the mark, and there is
                        optimal user experience along with feature-rich
                        functionalities that captivate users on the go
                      </p>

                      <h4 className="extra-title">
                        Custom Mobile App Development
                      </h4>

                      <p>
                        Making application solutions that align with your needs
                        and are highly customized is what we have expertise in.
                        Our expert app developers analyze your requirements,
                        design a solution, and develop app development solutions
                        that enhance efficiency, streamline your operations, and
                        are aligned with your business goals.
                      </p>

                      <h4 className="extra-title">
                        Web Application Development
                      </h4>

                      <p>
                        Web applications are a great way to boost your online
                        presence. We can create interactive, scalable, and smart
                        functioning web applications that offer an incredible
                        experience to your users and empower your business with
                        advanced functionalities.
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
                        Agile Development Methodology
                      </h4>
                      <p>
                        With an agile process development, we allow ourselves to
                        adapt rapidly to changes and frequent iterations. With
                        you, we collaborate closely so that there is no lack of
                        communication and to make sure that there is incremental
                        development. This results in quicker delivery of
                        development services minimized risks, and better project
                        outcomes.
                      </p>

                      <h4 className="extra-title">Application UI/UX Design</h4>
                      <p>
                        Our application developers collaborate with our &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/WebDesign">
                            design services
                          </Link>
                        </b>
                        &nbsp; team to bring aesthetic and functional UI/UX
                        designs for applications to life.
                      </p>

                      <h4 className="extra-title">
                        Quality Assurance and Testing
                      </h4>
                      <p>
                        Our teams commitment to excellence extends to software
                        quality assurance and testing as well. We perform
                        rigorous testing from unit to integration and guarantee
                        a flawless end product. We validate software
                        functionality, security, and performance and derive
                        reliable solutions to your needs.
                      </p>
                      <h4 className="extra-title">Tools We Work On</h4>
                      <p>
                        For application development, we work with Android
                        Studio, Xcode, Flutter, React Native, Ionic, Xamarin,
                        PhoneGap, NativeScript, Kotlin, Swift, JavaFX, Electron,
                        NW.js (Node-webkit), Unity, etc.
                        <br /> <br />
                        We also know our way to database tools, systems, and
                        technologies like MySQL, PostgreSQL, MongoDB, SQLite,
                        Microsoft SQL Server, Oracle Database, MariaDB, SQLite,
                        Teradata, Amazon RDS (Relational Database Service),
                        Google Cloud SQL, Microsoft Azure SQL Database.
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
                          <a href="#">App Development</a>
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
