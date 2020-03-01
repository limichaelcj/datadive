import React from 'react';
import PropTypes from 'prop-types';
import Segment from '../segment/segment';
import Card from '../card/card';
import Flexbox from '../flex/flexbox';
import NoData from './noData';
import Droppable from '../dragndrop/droppable';
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';
import chartVariants from './lib/variants';
// import react-vis stylesheet
import '../../../node_modules/react-vis/dist/style.css';

const Chart = ({ name, datasets, active, variant, selectChart, linkData }) => {

  const Variant = chartVariants[variant].component;

  const dataDrop = (dropData) => {
    linkData(dropData.datakey);
  };

  const renderChart = (datasets) => (
    <Flexbox parent direction="column">
      <Segment padding="0 0 1rem">
        <h5>{name}</h5>
      </Segment>
      <Flexbox child grow="1" shrink="1">
        <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {datasets.map(set => (
            <Variant data={set.data} />
          ))}
        </XYPlot>
      </Flexbox>
    </Flexbox>
  );

  return (
    <Droppable
      id="datatochart"
      receiveData={['datakey']}
      handleDrop={dataDrop}
    >
      <Card onClick={selectChart} active={active} style={{ margin: '1rem' }}>
        {datasets.length ? renderChart(datasets) : <NoData />}
      </Card>
    </Droppable>
  );
};

Chart.propTypes = {
  datasets: PropTypes.array,
  active: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(chartVariants)),
  selectChart: PropTypes.func,
  linkData: PropTypes.func,
}

Chart.defaultProps = {
  datasets: [],
  variant: 'Line',
}

export default Chart;
