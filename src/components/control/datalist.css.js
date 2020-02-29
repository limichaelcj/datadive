import styled from 'styled-components';

export default styled.ul`
  background-color: ${props => props.theme.background.main};
  border-radius: 2px;
  border: 1px solid ${props => props.theme.alpha.black.vl};
  box-shadow: inset ${props => props.theme.shadow.md};
  width: 100%;
  list-style: none;
  padding: 0;
  max-height: 15rem;
  overflow-x: hidden;
  overflow-y: scroll;

  li {
    padding: .5rem;
    width: 300px;
    &:nth-child(even) {
      background-color: ${props => props.theme.background.dark};
    }
    * {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }

`;
