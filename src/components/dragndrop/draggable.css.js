import styled from 'styled-components';

export default styled.div`
  cursor: ${props => props.dragging ? 'grabbing' : 'grab'};
  background-color: ${props => props.dragging ? props.theme.primary.alpha.vl : 'transparent'};
`;
