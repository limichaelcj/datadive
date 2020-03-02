import styled from 'styled-components';

export default styled.div`
  position: relative;
  height: 100%;
  width: ${props => props.theme.layout.inspector.width};
  background-color: ${props => props.theme.background.light};
  display: ${props => props.open ? 'inline-block' : 'none'};
`;
