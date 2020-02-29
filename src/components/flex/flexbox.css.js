import styled, { css } from 'styled-components';
import cssChild from './child.css';
import cssParent from './parent.css';

export default styled.div.attrs(props => ({
  gapSelector: props.direction.includes('reverse') ? 'last' : 'first',
  gapSide: props.direction.includes('column') ? 'top' : 'left',
}))`
  ${props => (!props.parent && !props.child) ? `
    display: contents;
  ` : css`
    ${props => props.parent ? cssParent : ''}
    ${props => props.child ? cssChild : ''}
  `}
  & > * {
    display: inline-block;
  }
`;
