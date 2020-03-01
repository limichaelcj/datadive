import React from 'react';
import PropTypes from 'prop-types';
import List from '../list/list';
import ListItem from '../list/item';
import Draggable from '../dragndrop/draggable';

const Datalist = ({ datasets }) => {

  const entries = Object.entries(datasets);

  return (
    <List variant="inset" maxHeight="46vh" width="300px">
      {entries.length ? entries
        .map(([key, dataset]) => (
          <Draggable
            id="datatochart"
            key={key}
            sendData={{ datakey: key }}
          >
            <ListItem variant="inset">
              <strong>{dataset.name}</strong>
              <span>{JSON.stringify(dataset.data)}</span>
            </ListItem>
          </Draggable>
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
