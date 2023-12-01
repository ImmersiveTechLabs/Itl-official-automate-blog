import React from "react";
import Navbar from "../components/Navbar/navbar";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import DarkTheme from "../layouts/Dark";
import Works3 from "../components/Works3/works3";
import AboutUs3 from "../components/About-us4/about-us4";
import AboutExtra from "../components/About-us3/about-us3";
import Numbers from "../components/Numbers/numbers";
import Services3 from "../components/Services3/services3";
import Cursor from "../components/cursor/index";

const Home = () => {
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
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Cursor /> 
      <AboutExtra/>
      <AboutUs3 />
      <Services3 />
      <Numbers />
      <Works3 />
      {/* <Blogs4 /> */}
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};


export default Home;
