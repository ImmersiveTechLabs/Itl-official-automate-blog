import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Dark";
import AboutExtra from "../components/Services5/services5";

const Services = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
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
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      {/* <Sbouttro /> */}
      <AboutExtra/>
      <Footer />
    </LightTheme>
  );
};

export default Services;
