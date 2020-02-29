import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Nav from './nav.css';

const Header = (props) => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <Nav>
      <h1>{site.siteMetadata.title}</h1>
    </Nav>
  );
};

export default Header;
