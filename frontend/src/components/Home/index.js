import Hero from "../Hero";
import React from "react";
import Partners from "../Partner";
import AboutHome from "./about_home";
import BlogsHome from "../Blogs/blogs_home";
import Services from "../Services";
import TestimonialMain from "../Testimonials";
import { Helmet } from "react-helmet";

export default function Home(props) {
  return (
    <>
      <Helmet>
        <title>Home | Techore Solutions</title>
      </Helmet>
      <Hero />
      <AboutHome />
      <Services />
      <Partners />
      <TestimonialMain />
      <BlogsHome />
    </>
  );
}
