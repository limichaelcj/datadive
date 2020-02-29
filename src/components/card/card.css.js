import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.background.light};
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow.sm};
  display: inline-block;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: 3px;
  border: 2px solid ${props => props.active ? props.theme.primary.alpha.md : 'transparent'};
`;
