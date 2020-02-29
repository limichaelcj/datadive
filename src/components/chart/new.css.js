import styled from 'styled-components';

export default styled.div`
  height: 300px;
  width: 300px;
  border: .5rem dashed ${props => props.theme.primary};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: ${props => props.theme.primary};
  font-weight: bold;
  margin: 1rem;
`;
