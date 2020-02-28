import React from 'react';
import PropTypes from 'prop-types';
import Flexbox from '../flex/flexbox';
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries
} from 'react-vis';
// import react-vis stylesheet
import '../../../node_modules/react-vis/dist/style.css';

const Chart = ({ dataset }) => {
  return (
    <Flexbox parent direction="column">
      <Flexbox child grow="1" shrink="1">
        <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={dataset} />
        </XYPlot>
      </Flexbox>
      <Flexbox child parent direction="row" gap="1rem">
        <button>Grid On</button>
        <button>Axes On</button>
      </Flexbox>
    </Flexbox>
  );
};

export default Chart;
