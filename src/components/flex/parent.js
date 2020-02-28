import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexParent = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction};
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};
`;

FlexParent.propTypes = {
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse', 'initial', 'inherit']),
  justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'initial', 'inherit']),
  align: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit']),
};

FlexParent.defaultProps = {
  direction: 'row',
  justify: 'flex-start',
  align: 'flex-start',
};

export default FlexParent;
