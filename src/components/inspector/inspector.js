import React from 'react';
import PropTypes from 'prop-types';
import Styled from './inspector.css';
import Segment from '../segment/segment';

const Inspector = ({ open }) => {
  return (
    <Styled open={open}>
      <Segment>
        Inspector
      </Segment>
    </Styled>
  );
};

Inspector.propTypes = {
  open: PropTypes.bool,
}

Inspector.defaultProps = {
  open: false,
}

export default Inspector;
