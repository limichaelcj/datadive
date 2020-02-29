import React from 'react';
import PropTypes from 'prop-types';
import Styled from './list.css';

const List = (props) => {
  return (
    <Styled {...props}>
      {props.children}
    </Styled>
  );
};

List.propTypes = {
  variant: PropTypes.oneOf(['base', 'inset']),
  children: PropTypes.node,
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  style: PropTypes.object,
};

List.defaultProps = {
  variant: 'base',
  height: 'auto',
  maxHeight: 'auto',
  width: 'none',
  maxWidth: 'none',
};

export default List;
