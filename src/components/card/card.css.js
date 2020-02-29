import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.paper};
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow.sm};
  display: inline-block;
  width: ${props => props.width || 'auto'}
  height: ${props => props.height || 'auto'}
`;
