import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  min-height: ${props => props.theme.layout.main.height};
  background-color: ${props => props.theme.background.light};
  box-shadow: ${props => props.theme.shadow.sm()};
`;
