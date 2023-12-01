import React from "react";
import blog3Data from "../../data/blog3.json";
import LightTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/seo";
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
        title="SEO Services"
        paragraph="SEO is what you need to drive traffic to your website. SEO improves your online visibility and allows you to be discovered by others. The better your SEO is, the more traffic you get, since more people know about your business."
      />
          <BlogDetails theme="light" blog={"blog"}/>
          <Footer/>
    </LightTheme>
  );
};

export default Shopify;
