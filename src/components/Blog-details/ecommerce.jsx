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
                <img src="/img/services/E-C.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p className="quotes text-center">
                          Whether your business is new or you are looking to get
                          an online presence for your well-running business, we
                          will make sure that your transition to the digital
                          world is done with ease and that we apply our
                          expertise to make your business better. Our services
                          include:
                        </p>
                      </div>
                      <h4 className="extra-title">
                        Platform Selection and Integration
                      </h4>
                      <p>
                        Before the creation of the store, we will guide you with
                        our expertise to choose the best E-commerce platform for
                        your needs. From Shopify-s simplicity to WooCommerces
                        flexibility, we will talk with you and decide the
                        platform for you that aligns with your goals.
                      </p>

                      <h4 className="extra-title">Custom Store Creation</h4>

                      <p>
                        Our skilled developers are proficient in creating
                        visually stunning and user-friendly E-commerce stores
                        with full functionality. The store will be customized as
                        per your brand values, identity, and business goals.
                        With 100% seamless navigation, it-s time that you take
                        your business to the next level with intuitive product
                        categorization and secure payment gateways so that the
                        users get a high-quality experience.
                      </p>

                      <h4 className="extra-title">Responsive Design</h4>

                      <p>
                        Along with the rise of mobile shopping, it is crucial
                        that the E-commerce store adapts accordingly and is
                        equally suitable for all devices, including smartphones
                        and tablets. This will optimize the shopping experience
                        on every screen and will maximize sales. We make a
                        collaboration happen so that our &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/WebDesign">
                            design services
                          </Link>
                        </b>
                        &nbsp; team comes together with our e-commerce team to
                        build a next-level product.
                      </p>

                      <h4 className="extra-title">
                        Product Catalog Management
                      </h4>
                      <p>
                        We efficiently organize and manage your product catalog,
                        including product descriptions, images, pricing, and
                        inventory, to keep your store up-to-date and running
                        smoothly.
                      </p>

                      <h4 className="extra-title">Product visualization</h4>
                      <p>
                        With our 3D animation team, we can build product
                        visualizations that showcase your products to your
                        audience like never before.
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

                      <h4 className="extra-title">
                        SEO and Marketing Integration
                      </h4>
                      <p>
                        We implement our SEO strategies with the help of our
                        &nbsp;
                        <b className="extra-title">
                          <Link href="/Services/Seo">SEO</Link>
                        </b>
                        &nbsp; specialists on your store so that the traffic on
                        your store is increased. We integrate various digital
                        marketing tools and make sure that the store is visible
                        to all potential customers effectively in the market.
                      </p>
                      <h4 className="extra-title">Performance Optimization</h4>
                      <p>
                        Our experts will optimize your store for performance so
                        that the loading speed and overall efficiency are
                        increased, which contributes to higher search rankings
                        and improved user experience.
                      </p>

                      <h4 className="extra-title">Maintenance and Support</h4>
                      <p>
                        Our relationship doesn-t end after the launch. We
                        provide ongoing support, troubleshooting, and updates to
                        keep your E-commerce store running smoothly because we
                        care.
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
                          <a href="#">E-commerce</a>
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
