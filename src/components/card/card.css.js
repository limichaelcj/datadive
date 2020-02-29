import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.paper};
  padding: 2rem;
  box-shadow: .1rem .1rem 1rem -.5rem ${props => props.theme.shadow};
  display: inline-block;
  width: ${props => props.width || 'auto'}
  height: ${props => props.height || 'auto'}
`;
