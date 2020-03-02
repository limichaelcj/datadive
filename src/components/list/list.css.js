import styled, { css } from 'styled-components';

const insetStyle = css`
  background-color: ${props => props.theme.background.main};
  border-radius: 2px;
  border: 1px solid ${props => props.theme.alpha.black.vl};
  box-shadow: inset ${props => props.theme.shadow.sm()};
  overflow-x: hidden;
  overflow-y: scroll;
  & > *:nth-child(even) {
    background-color: ${props => props.theme.background.dark};
  }
`;

export default styled.ul`
  list-style: none;
  padding: 0;
  width: ${props => props.width || 'auto'};
  max-width: ${props => props.maxWidth || 'none'};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.maxHeight || 'none'};

  ${props => {
    switch(props.variant){
      case 'inset':
        return insetStyle;
      default:
    }
  }}

`;
