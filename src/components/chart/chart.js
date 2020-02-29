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

const Chart = ({ name, dataset, active, variant, selectChart, linkData }) => {

  const Variant = chartVariants[variant].component;

  const dataDrop = (data) => {
    linkData(data.datakey);
  };

  const renderChart = (data) => {
    if (data) {
      return (
        <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <Variant data={data} />
        </XYPlot>
      );
    } else {
      return <NoData />;
    }
  }

  return (
    <Droppable
      id="datatochart"
      receiveData={['datakey']}
      handleDrop={dataDrop}
    >
      <Card onClick={selectChart} active={active} style={{ margin: '1rem' }}>
        <Flexbox parent direction="column">
          {name && (
            <Segment padding="0 0 1rem">
              <h5>Dataset {name}</h5>
            </Segment>
          )}
          <Flexbox child grow="1" shrink="1">
            {renderChart(dataset)}
          </Flexbox>
        </Flexbox>
      </Card>
    </Droppable>
  );
};

Chart.propTypes = {
  dataset: PropTypes.array,
  active: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(chartVariants)),
  selectChart: PropTypes.func,
  linkData: PropTypes.func,
}

Chart.defaultProps = {
  variant: 'Line',
}

export default Chart;
