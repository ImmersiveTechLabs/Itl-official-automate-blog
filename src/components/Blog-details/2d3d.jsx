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
                <img src="/img/services/2D 3D.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p className="quotes text-center">
                          With visually stunning and appealing animations, you
                          can leave a long-lasting effect on your audience.
                          Whether it-s eye-catching graphics for your marketing
                          campaigns or immersive 2D/3D animations for your
                          website or videos, we will ensure that your handy
                          experience is put to practice that you get results
                          that only go one way, in your favor, and that you
                          reach a bigger audience.
                        </p>
                      </div>
                      <h4 className="extra-title">
                        Narrative Animation Creation
                      </h4>
                      <p>
                        Our animation experts bring stories to life with their
                        skillful animations and captivating visuals. From
                        initial concept to storyboarding, our experts create
                        narrations with animations that keep the audience hooked
                        emotionally and intellectually, which creates memorable
                        experiences.
                      </p>

                      <h4 className="extra-title">
                        Dynamic Character Animation
                      </h4>

                      <p>
                        Our experts create dynamic character animation.
                        Characters take center stage in our animation. We
                        breathe into life characters through fluid movements and
                        expressions. This makes the characters relatable and
                        enhances the storytelling experience.
                      </p>

                      <h4 className="extra-title">Immersive Visual Effects</h4>

                      <p>
                        We incorporate immersive visual effects that astonish
                        the audience. From particle simulations to explosive
                        action sequences, we are all about creating dynamic
                        animations and leaving a lasting impact.
                      </p>

                      <h4 className="extra-title">
                        Realistic Product Visualization
                      </h4>
                      <p>
                        Now you can get next-level product visualization with
                        us. When our e-commerce team collaborates with our
                        animators, we create realistic animations that showcase
                        product functionality and design, which enables
                        customers to visualize and engage with your offerings.
                      </p>

                      <h4 className="extra-title">
                        Architectural Animation Showcase
                      </h4>
                      <p>
                        You can step into your designs with architectural
                        animations. We transform blueprints into walkthroughs
                        which enable clients to experience spaces virtually and
                        understand the design-s potential.
                      </p>

                      <h4 className="extra-title">Tools We Work On</h4>
                      <p>
                        For 2D and 3D animation, we use tools like Maya
                        Autodesk, Maxon Cinema 4D, Moho, Synfig Studio, Pencil
                        2D, Blender, Dragonframe, etc.
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
                          <a href="#">2d and 3d Animations</a>
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
