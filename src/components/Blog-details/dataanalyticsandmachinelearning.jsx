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
                <img src="/img/services/DA.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p className="quotes text-center">
                          Our experts transform raw data into useful insights
                          and forecasts that take your business to a flying
                          stage. With our advanced analytics solutions, you gain
                          a competitive edge and unlock strategic opportunities
                          to propel your business forward.
                        </p>
                      </div>
                      <h4 className="extra-title">
                        Customized Chatbot Creation 🔥 (Hottest)
                      </h4>
                      <p>
                        This is our hottest product right now. We create
                        AI-powered chatbots that can mimic any personality,
                        through data. It-s about time that a chatbot having your
                        own personality is deployed on your site and talks to
                        your customers when you arent there. Excited much? So
                        are we. &nbsp;
                        <b className="extra-title">
                          <Link href="/contact/contact-light/">Contact Us</Link>
                        </b>
                        &nbsp; for more.
                      </p>

                      <h4 className="extra-title">AI-powered products</h4>

                      <p>
                        We create AI-powered tools, products, and technologies
                        through customized coding in Python and other languages
                        to make your job easier. Our service consists of highly
                        customized AI-powered tools that can enhance your
                        previous workflows. You can create any AI-powered tool
                        that you like.
                      </p>

                      <h4 className="extra-title">Data Visualization</h4>

                      <p>
                        We have experts who possess data visualization
                        techniques to visualize and present complex data in a
                        visually engaging manner, which makes it easier for you
                        to comprehend and make decisions.
                      </p>

                      <h4 className="extra-title">Predictive Analysis</h4>
                      <p>
                        Our predictive analytics models leverage historical data
                        to predict future trends and results, which empowers you
                        to plan your next strategy and optimize your business
                        and its sustainability.
                      </p>

                      <h4 className="extra-title">Customer Segmentation</h4>
                      <p>
                        By segmenting your customers based on behavior and
                        preferences using unsupervised machine learning, we
                        enable you to target specific groups with specific
                        marketing efforts that save your cost and allow the user
                        to have a personalized experience.
                      </p>

                      <h4 className="extra-title">Recommendation Systems</h4>
                      <p>
                        By implementing recommendation systems, you can help
                        enhance customer engagement and loyalty by offering
                        personalized product recommendations, which will lead to
                        higher conversions and customer satisfaction.
                      </p>

                      <h4 className="extra-title">Fraud Detection</h4>
                      <p>
                        Our custom-made machine learning models can help detect
                        fraudulent activities, safeguarding your business and
                        ensuring a safe space for both you and the customer.
                      </p>

                      <h4 className="extra-title">Churn Analysis</h4>
                      <p>
                        With the power of data analysis, you can have a closer
                        look at the reasons a customer churns and you can
                        identify the patterns of customer churn to implement
                        better strategy and retain your customers.
                      </p>

                      <h4 className="extra-title">
                        Custom Machine Learning Models
                      </h4>
                      <p>
                        We develop customized machine learning models that
                        address the specific needs of your business and get the
                        most effective solution.
                      </p>

                      <h4 className="extra-title">Real-time Analytics</h4>
                      <p>
                        We empower you with real-time analytics capabilities so
                        that you can respond quickly to changes in market trends
                        and conditions, and make better business decisions.
                      </p>

                      <h4 className="extra-title">
                        A/B Testing and Optimization
                      </h4>
                      <p>
                        We conduct A/B testing to evaluate different strategies
                        and optimize your marketing campaigns and user
                        experiences for better performance.
                      </p>

                      <h4 className="extra-title">Tools We Work On</h4>
                      <p>
                        For AI/ML, we work with TensorFlow, PyTorch,
                        Scikit-Learn, Keras, OpenCV, XGBoost, and others. For
                        Data visualizations and analysis, we use Tableau, Power
                        BI, Google Data Studio as well and SQL to leverage for
                        data manipulation.
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
                          <a href="#">Ai and Data Analytics</a>
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
