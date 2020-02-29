import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 300px;
  width: 300px;
  border: 1px solid ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-style: italic;
`;

const NoData = () => <Wrapper>No Data</Wrapper>;

export default NoData;
