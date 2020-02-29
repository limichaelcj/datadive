import React from 'react';
import PropTypes from 'prop-types';
import List from '../list/list';
import ListItem from '../list/item';
import chartVariants from '../chart/lib/variants';

// react-vis series
const entries = Object.entries(chartVariants);

const ChartList = ({ active, setSeries }) => {

  return (
    <List>
      {entries.map(([k,v], i) => (
        <ListItem
          variant="flat"
          key={k}
          active={active === k}
          style={{cursor: active !== null ? 'pointer' : 'auto'}}
          onClick={active !== null ? setSeries(k) : null}
        >
          {v.name} Series
        </ListItem>
      ))}
    </List>
  );
};

ChartList.propTypes = {
  active: PropTypes.oneOf(entries.map(([k,v]) => k)),
  setSeries: PropTypes.func,
}

export default ChartList;
