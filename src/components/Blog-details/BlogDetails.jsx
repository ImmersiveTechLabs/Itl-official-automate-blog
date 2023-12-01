import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";



const BlogDetails = ({ content , image }) => {
    // Render the blog content safely
    return( 
    <>
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
          <div className="post">

          <div className="img">
          <img src={image} alt="" />
            </div>
            <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
    <div dangerouslySetInnerHTML={{ __html: content }} />
    </div></div></div></div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </>
    )
  };
  
  export default BlogDetails;