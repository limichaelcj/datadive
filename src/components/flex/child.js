import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexChild = styled.div`
  flex-basis: ${({basis}) => basis || 'auto'};
  flex-grow: ${({grow}) => grow || 0};
  flex-shrink: ${({shrink}) => shrink || 0};
`;

FlexChild.propTypes = {
  basis: PropTypes.string,
  grow: PropTypes.string,
  shrink: PropTypes.string,
};

export default FlexChild;
