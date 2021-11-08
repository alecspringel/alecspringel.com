/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import './index.css';
import '@fontsource/poppins';
import '@fontsource/lato';

const theme = {
  background: '#343434',
  background2: '#242424',
  background3: '#131313',
  primary: '#27C499',
  headingColor: '#FFF',
  bodyColor: '#BCBCBC',
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    <main>{children}</main>
    <footer
      className="text-center"
      style={{
        marginTop: '2rem',
        padding: '2rem',
      }}
    >
      <div style={{ marginBottom: 5 }}>Copyright © 2021 Alec Springel</div>
      Designed and built by Alec Springel -
      <a
        className="primary-color "
        href="https://github.com/alecspringel/alecspringel.com"
      >
          &nbsp;View on GitHub
      </a>
    </footer>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
