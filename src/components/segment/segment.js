import React from 'react';
import PropTypes from 'prop-types';
import Styled from './segment.css';

const Segment = (props) => {
  return (
    <Styled {...props}>
      {props.children}
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
