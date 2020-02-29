import React from 'react';
import PropTypes from 'prop-types';
import Styled from './panel.css';
import Segment from '../segment/segment';
import Datalist from './datalist';
import ChartList from './chartList';
import series from '../chart/lib/variants';

const ControlPanel = ({ datasets, selectedSeries, setSeries, generateRandom }) => {
  return (
    <Styled>
      <Segment>
        <h3>Datasets</h3>
        <Datalist datasets={datasets} />
        <button onClick={generateRandom}>
          Generate Random
        </button>
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
