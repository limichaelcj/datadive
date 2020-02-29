import React from 'react';
import PropTypes from 'prop-types';
import Styled from './panel.css';
import Segment from '../segment/segment';
import Flexbox from '../flex/flexbox';
import Datalist from './datalist';
import ChartList from './chartList';
import series from '../chart/lib/variants';

const ControlPanel = ({ datasets, selectedSeries, setSeries, generateRandom }) => {
  return (
    <Styled>
      <Segment>
        <Flexbox parent direction="row" align="center" justify="space-between">
          <h3>Datasets</h3>
          <button onClick={generateRandom}>
            Random
          </button>
        </Flexbox>
        <Datalist datasets={datasets} />
      </Segment>
      <Segment>
        <h3>Chart Types</h3>
        <ChartList
          active={selectedSeries}
          setSeries={setSeries}
        />
      </Segment>
    </Styled>
  );
};

ControlPanel.propTypes = {
  datasets: PropTypes.object,
  selectedSeries: PropTypes.oneOf(Object.keys(series)),
  setSeries: PropTypes.func,
  generateRandom: PropTypes.func,
}

export default ControlPanel;
