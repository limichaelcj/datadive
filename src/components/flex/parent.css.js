import { css } from 'styled-components';

export default css`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};

  & > *:not(:${props => props.gapSelector}-child) {
    margin-${props => props.gapSide}: ${props => props.gap || 0};
  }
`;
