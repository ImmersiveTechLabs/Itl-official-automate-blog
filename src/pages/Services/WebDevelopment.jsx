import React from "react";
import blog3Data from "../../data/blog3.json";
import LightTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/webdevelopment";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";

const Development = () => {
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
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <PageHeader
        title="Website Development"
        paragraph="In this digital world where businesses claim their legitimacy through their websites, it would be impossible for you to run your business without a website that is quick and visibly pleasing. People will question your legitimacy if you dont have a website and may still do so if your website looks like garbage."
      />
      <BlogDetails theme="light" blog={"blog"} />
      <Footer />
    </LightTheme>
  );
};

export default Development;
