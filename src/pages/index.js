import React from "react";
import About from "../components/about/About";
import Welcome from "../components/home/Welcome";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Home() {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Welcome />
        <About />
      </Layout>
    </>
  );
}
