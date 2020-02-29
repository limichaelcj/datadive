import React from 'react';
import PropTypes from 'prop-types';
import List from '../list/list';
import ListItem from '../list/item';

const Datalist = ({ datasets }) => {

  const entries = Object.entries(datasets);

  return (
    <List variant="inset" maxHeight="15rem" width="300px">
      {entries.length ? entries
        .filter(([key, data]) => data !== null)
        .map(([key, data]) => (
          <ListItem variant="inset" key={key}>
            <strong>{key}</strong>
            <span>{JSON.stringify(data)}</span>
          </ListItem>
        )
      ) : (
        <ListItem>No datasets.</ListItem>
      )}
    </List>
  );
};

Datalist.propTypes = {
  datasets: PropTypes.object,
}

Datalist.defaultProps = {
  datasets: {},
}

export default Datalist;
