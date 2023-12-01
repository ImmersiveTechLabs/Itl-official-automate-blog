import React from "react";
import blog3Data from "../../data/blog3.json";
import LightTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/socialmedia";
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
        title="Social Media Marketing"
        paragraph="In this digital age, leveraging the power of social media is the key to driving more traffic to your website. With social media marketing, you can create your brand’s identity, and maintain an online presence throughout. With SMM, you can have increased exposure to your brand all over the internet, which will make your credibility higher.         "
      />
          <BlogDetails theme="light" blog={"blog"}/>
          <Footer/>
    </LightTheme>
  );
};

export default Shopify;
