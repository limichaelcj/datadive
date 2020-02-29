import React from 'react';
import PropTypes from 'prop-types';
import Styled from './new.css';

const NewChart = ({ onClick }) => {
  return (
    <Styled onClick={onClick}>
      +
    </Styled>
  );
};

NewChart.propTypes = {
  onClick: PropTypes.func,
}

export default NewChart;
