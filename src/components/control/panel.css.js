import styled from 'styled-components';

export default styled.div`
  height: calc(100vh - ${props => props.theme.layout.header.height});
  max-height: calc(100vh - ${props => props.theme.layout.header.height});
  width: 100%;
  background-color: ${props => props.theme.background.light};
`;
