import React from "react";
import blog3Data from "../../data/blog3.json";
import LightTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/webdesign";
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
        title="Web Design"
        // paragraph="Immersive Tech Lab set foot in the web development market in 2021 and ever since we have become the fastest-growing Web development agency in the Middle East. Along with the Middle East, we have served various clients in the North American Region, including the USA, Canada, and the Caribbean."
      />
      <BlogDetails theme="light" blog={"blog"} />
      <Footer />
    </LightTheme>
  );
};

export default Development;
