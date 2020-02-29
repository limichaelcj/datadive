import React from 'react'
import PropTypes from 'prop-types'
import Styled from './item.css';

const ListItem = (props) => {
  return (
    <Styled {...props}>
      {props.children}
    </Styled>
  );
};

ListItem.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['flat', 'inset', 'base']),
  active: PropTypes.bool,
  style: PropTypes.object,
};

ListItem.defaultProps = {
  variant: 'base',
  active: false,
};

export default ListItem;
