import styled from 'styled-components';

export default styled.div`
  outline: ${props => props.draggingOver ? props.theme.primary.alpha.vl : 'none'};
`;
