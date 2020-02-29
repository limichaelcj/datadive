import React from 'react';
import PropTypes from 'prop-types';
import Styled from './card.css';

const Card = ({ children }) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
};

Card.propTypes = {
  children: PropTypes.node,
}

export default Card;
