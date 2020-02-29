import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    background-color: ${props => props.theme.background};
  }
`;
