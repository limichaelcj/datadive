import React from 'react';
import PropTypes from 'prop-types';
import List from '../list/list';
import ListItem from '../list/item';

// react-vis series
const series = [
  'Arc',
  'Area',
  'Contour',
  'Heatmap',
  'Horizontal Bar',
  'Label',
  'Line',
  'Mark',
  'Polygon',
  'Rect',
  'VerticalBar',
]

const ChartSeries = ({ active }) => {

  return (
    <List>
      {series.map((name, i) => (
        <ListItem
          variant="flat"
          key={i}
          active={active === name}
          style={{cursor: 'pointer'}}
        >
          {name} Series
        </ListItem>
      ))}
    </List>
  );
};

ChartSeries.propTypes = {
  active: PropTypes.oneOf(series),
}

export default ChartSeries;
