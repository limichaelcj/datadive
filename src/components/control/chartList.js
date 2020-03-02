import React from 'react';
import PropTypes from 'prop-types';
import List from '../list/list';
import Flexbox from '../flex/flexbox';
import ListItem from '../list/item';
import chartVariants from '../chart/lib/variants';

// react-vis series
const entries = Object.entries(chartVariants);

const ChartList = ({ active, setSeries }) => {

  return (
    <Flexbox direction="row" flexwrap as="ul">
      {entries.map(([k,v], i) => (
        <ListItem
          variant="flat"
          key={k}
          active={active === k}
          onClick={active !== null ? setSeries(k) : null}
          style={{
            flex: '0 0 50%',
            cursor: active !== null ? 'pointer' : 'auto',
          }}
        >
          {v.name}
        </ListItem>
      ))}
    </Flexbox>
  );
};

ChartList.propTypes = {
  active: PropTypes.oneOf(entries.map(([k,v]) => k)),
  setSeries: PropTypes.func,
}

export default ChartList;
