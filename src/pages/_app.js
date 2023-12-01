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
        <script
          dangerouslySetInnerHTML={{
            __html: `
             !function(f,b,e,v,n,t,s)
             {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
             n.callMethod.apply(n,arguments):n.queue.push(arguments)};
             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
             n.queue=[];t=b.createElement(e);t.async=!0;
             t.src=v;s=b.getElementsByTagName(e)[0];
             s.parentNode.insertBefore(t,s)}(window, document,'script',
             'https://connect.facebook.net/en_US/fbevents.js');
             fbq('init', '994458774953208');
             fbq('track', 'PageView');
            `,
          }}
        />

<noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=994458774953208&ev=PageView&noscript=1"
          />
        </noscript>
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
