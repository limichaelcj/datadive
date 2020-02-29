import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    background-color: ${props => props.theme.background.main};
    padding: 0;
    margin: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
  }

`;
