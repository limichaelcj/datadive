import styled from 'styled-components';

export default styled.div`
  height: ${props => props.theme.layout.main.height};
  max-height: ${props => props.theme.layout.main.height};
  width: 100%;
  background-color: ${props => props.theme.background.light};
`;
