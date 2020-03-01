import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Bar from './bar.css';

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
    <Bar>
      <h1>{site.siteMetadata.title}</h1>
    </Bar>
  );
};

export default Header;
