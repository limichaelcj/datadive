import React from 'react';
import PropTypes from 'prop-types';
import Styled from './flexbox.css';

const Flexbox = (props) => (
  <Styled {...props}>
    {props.children}
  </Styled>
);

Flexbox.propTypes = {
  children: PropTypes.node,
  parent: PropTypes.bool,
  child: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse', 'initial', 'inherit']),
  justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'initial', 'inherit']),
  align: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit']),
  gap: PropTypes.string,
  wrap: PropTypes.bool,
  basis: PropTypes.string,
  grow: PropTypes.string,
  shrink: PropTypes.string,
};

Flexbox.defaultProps = {
  parent: false,
  child: false,
  direction: 'row',
  justify: 'flex-start',
  align: 'flex-start',
  wrap: false,
  basis: 'auto',
  grow: '0',
  shrink: '0',
};

export default Flexbox;
