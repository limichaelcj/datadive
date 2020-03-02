/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './global.css';
import { ThemeProvider } from 'styled-components';
import Header from '../header/header';
import theme from './theme';

const Layout = ({ children }) => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <main style={{
          width: '100%',
          minHeight: theme.layout.main.height,
          maxHeight: theme.layout.main.height,
        }}>
          {children}
        </main>
      </ThemeProvider>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
