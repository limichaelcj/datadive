import { css } from 'styled-components';

export default css`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};

  ${props => props.gap ? css`
    & > *:not(:${props => props.gapSelector}-child) {
      margin-${props => props.gapSide}: ${props => props.gap || 0};
    }
  ` : ''}
`;
