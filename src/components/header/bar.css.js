import styled from 'styled-components';
import Segment from '../segment/segment';

export default styled.nav`
  position: relative;
  z-index: 2;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.background.light};
  border-bottom: 1px solid ${props => props.theme.alpha.black.vl};
  box-shadow: ${props => props.theme.shadow.sm(0)};
  height: ${props => props.theme.layout.header.height};
`;
