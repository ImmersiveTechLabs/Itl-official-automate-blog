import React from "react";
import blog3Data from "../../data/blog3.json";
import LightTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/ecommerce";
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
        title="E-commerce"
        paragraph="Looking to set up your E-commerce store? Or do you want your E-commerce store to be managed effectively? Allow us to do it for you seamlessly. We have a team of experts who will create your E-commerce store and manage it for you on the platform of your choice including Shopify, WooCommerce, OpenCart, Wix, and more."
      />
          <BlogDetails theme="light" blog={"blog"}/>
          <Footer/>
    </LightTheme>
  );
};

export default Shopify;
