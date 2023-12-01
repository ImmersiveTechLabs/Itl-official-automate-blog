import { useRouter } from 'next/router';
import React, { useEffect, useRef } from "react";
import DarkTheme from "../../layouts/Dark.jsx";
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import BlogDetails from '../../components/Blog-details/BlogDetails.jsx';
import blogPosts from '../../data/blogs.json';
import PageHeader from "../../components/Page-header/page-header.jsx";
import BlogList from "./blog-list-dark.jsx";


const BlogPost = () => {
  const navbarRef = useRef(null);
  const router = useRouter();
  const { slug } = router.query;
  
  const post = blogPosts.find(p => p.link === slug);
  
  useEffect(() => {
    const navbar = navbarRef.current;
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return  <BlogList /> // or a custom loading component
  }

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <PageHeader title={post.title} paragraph={post.subtitle} /> {/* Use PageHeader here */}

      <BlogDetails content={post.content} image={post.image} />
      <Footer />
    </DarkTheme>
  );
};

export default BlogPost;
