import styled from 'styled-components';

export default styled.div`
  position: relative;
  height: 180px;
  width: 180px;
  border: .5rem dashed ${props => props.theme.primary.main};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: ${props => props.theme.primary.main};
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  margin: calc(60px + 1rem);
  transition: ${props => props.theme.transition.button};
  span {
    transition: inherit;
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadow.md};
     span {
       transform: scale(1.2);
     }
  }
  &:active {
    transform: scale(1);
    span {
      transform: inherit;
    }
  }
`;
