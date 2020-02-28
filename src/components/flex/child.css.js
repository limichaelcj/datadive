import { css } from 'styled-components';

export default css`
  flex-basis: ${props => props.basis || 'auto'};
  flex-grow: ${props => props.grow || 0};
  flex-shrink: ${props => props.shrink || 0};
`;
