/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import DarkTheme from "../layouts/Dark";
import ContactHeader from "../components/Contact-header/contact-header";
import ContactForm from "../components/Contact-form/contact-form";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

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
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ContactHeader />
      <div className="main-content">
        <ContactForm />
        <div className="map" id="ieatmaps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861056.6171414708!2d52.62927674673854!3d24.35080457627605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f68321bb1bcef%3A0xa576c00b5ae4417b!2sWestburry%20Business%20Tower!5e0!3m2!1sen!2sus!4v1701179822241!5m2!1sen!2sus"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        </div>

        <Footer hideBGCOLOR />
      </div>
    </DarkTheme>
  );
};

export default Contact;
