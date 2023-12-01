import React from "react";
import blog3Data from "../../data/blog3.json";
import LightTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/graphics";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";

const Shopify = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL"/>
      <PageHeader
        title="Graphic Designing "
        paragraph="Immersive Tech Lab is well aware of the importance of graphics for the flourishing of a new business. This is why we offer next-level Graphics designing that will take your business to a higher dimension. Our creative-minded graphic designers know how to mold their talent as per the requirement and deliver at the highest quality. "
      />
          <BlogDetails theme="light" blog={"blog"}/>
          <Footer/>
    </LightTheme>
  );
};

export default Shopify;
