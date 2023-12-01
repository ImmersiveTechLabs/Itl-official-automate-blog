import React from "react";
import Head from "next/head";
import Script from "next/script";
import ScrollToTop from "../components/scrollToTop";

import "../styles/main.scss";
import Data from "../data/blogs.json";
import Data2 from "../data/blogs.json";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      {
          Data2.map((blog, index) => {
            return (
              <meta key={index} name="title" content={blog.title} />
            )
          })
        }
        <title>ImmersiveTechlab Marketing Agency </title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      {
          Data.map((blog, index) => {
            return (
              <>
              <meta key={index} name="title" content={blog.title} />
              <meta key={index} name="description" content={blog.subtitle} />
              </>
            )
          })
        }
         </Head>
      {/* <LoadingScreen /> */}
      {/* <Cursor /> */}
      <Component {...pageProps} />
      <ScrollToTop />
      {/* <Script id="wow" src="/js/wow.min.js"></Script> */}
      {/* <Script src="/js/randomquery.js"></Script> */}
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      {/* <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script> */}
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      {/* <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script> */}
    </>
  );
}

export default MyApp;
