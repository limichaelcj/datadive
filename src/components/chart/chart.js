import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import Flexbox from '../flex/flexbox';
import NoData from './noData';
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

const Chart = ({ dataset, active, selectChart, generateRandom }) => {



  const renderChart = (data) => {
    if (data) {
      return (
        <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={dataset} />
        </XYPlot>
      );
    } else {
      return (
        <NoData />
      );
    }
  }

  return (
    <Card onClick={selectChart} active={active} style={{ margin: '1rem' }}>
      <Flexbox parent direction="column">
        <Flexbox child grow="1" shrink="1">
          {renderChart(dataset)}
        </Flexbox>
        <Flexbox child parent direction="row" gap="1rem">
          <button onClick={generateRandom}>Fill Data</button>
          <button>Grid On</button>
          <button>Axes On</button>
        </Flexbox>
      </Flexbox>
    </Card>
  );
};

Chart.propTypes = {
  dataset: PropTypes.array,
  active: PropTypes.bool,
  selectChart: PropTypes.func,
  handleHydrate: PropTypes.func,
}

export default Chart;
