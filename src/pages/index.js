import React from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import Welcome from "../components/home/Welcome";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Home() {
  return (
    <>
      <Layout>
        <SEO />
        <Welcome />
        <About />
        <Experience />
        <Contact />
      </Layout>
    </>
  );
}
