/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import "./index.css";
import "@fontsource/poppins";
import "@fontsource/lato";

const theme = {
  background: "#343434",
  background2: "#242424",
  background3: "#131313",
  primary: "#27C499",
  headingColor: "#FFF",
  bodyColor: "#BCBCBC",
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div
        style={{
          margin: `70px auto`,
          maxWidth: 1260,
          padding: `0 2rem`,
        }}
      >
        <main>{children}</main>
        <footer
          className="text-center"
          style={{
            marginTop: `2rem`,
          }}
        >
          Designed and built by Alec Springel with React -
          <a
            className="primary-color "
            href="https://github.com/alecspringel/alecspringel.com"
          >
            &nbsp;View on GitHub
          </a>
        </footer>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
