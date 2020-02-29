import styled, { css } from 'styled-components';

const insetStyle = css`
  padding: .5rem;
  width: 100%;
  &, * {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

const flatStyle = css`
  padding: .8rem;
  border-left: 3px solid ${props => props.active ? props.theme.primary.main : 'transparent'};
  background-color: ${props => props.active ? props.theme.primary.alpha.vl : 'inherit'};
  color: ${props => props.active ? props.theme.primary.dark : props.theme.text.main};
`;

const baseStyle = css`
  padding: .5rem;
`;

export default styled.li`
  ${props => {
    switch(props.variant){
      case 'inset':
        return insetStyle;
      case 'flat':
        return flatStyle;
      default:
        return baseStyle;
    }
  }}
`;
