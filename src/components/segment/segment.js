import React from 'react';
import PropTypes from 'prop-types';
import Styled from './segment.css';

const Segment = ({ children, padding, margin, style }) => {
  return (
    <Styled padding={padding} margin={margin} style={style}>
      {children}
    </Styled>
  );
};

Segment.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.string,
  margin: PropTypes.string,
  style: PropTypes.object,
};

export default Segment;
