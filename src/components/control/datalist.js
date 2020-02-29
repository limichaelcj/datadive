import React from 'react';
import PropTypes from 'prop-types';
import Styled from './datalist.css';

const Datalist = ({ datasets }) => {

  const entries = Object.entries(datasets);

  return (
    <Styled>
      {entries.length ? (
        entries
          .filter(([key, data]) => data !== null)
          .map(([key, data]) => (
            <li key={key}>
              <strong>{key}</strong>
              <span>{JSON.stringify(data)}</span>
            </li>
          )
        )
      ) : (
        <li>No datasets.</li>
      )}
    </Styled>
  );
};

Datalist.propTypes = {
  datasets: PropTypes.object,
}

Datalist.defaultProps = {
  datasets: {},
}

export default Datalist;
