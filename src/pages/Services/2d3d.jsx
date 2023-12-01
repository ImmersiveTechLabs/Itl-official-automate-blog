import React from "react";
import blog3Data from "../../data/blog3.json";
import LightTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/2d3d";
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
        title="2D And 3D Animations"
        paragraph="Immersive Tech Lab is well aware of the importance of graphics for the flourishing of a new business. This is why we offer next-level 2D and 3D animations that will take your business to a higher dimension. Our creative-minded 2D/3D animators know how to mold their talent as per the requirement and deliver at the highest quality."
      />
      <BlogDetails theme="light" blog={"blog"} />
      <Footer />
    </LightTheme>
  );
};

export default Development;
