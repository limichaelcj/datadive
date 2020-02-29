import React from 'react';
import PropTypes from 'prop-types';
import Styled from './card.css';

const Card = ({ children, width, height, style }) => {
  return (
    <Styled width={width} height={height} style={style}>
      {children}
    </Styled>
  )
};

Card.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
}

Card.defaultProps = {
  width: 'auto',
  height: 'auto',
}

export default Card;
