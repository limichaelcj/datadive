import React from 'react';
import PropTypes from 'prop-types';
import Styled from './panel.css';
import Segment from '../segment/segment';
import Datalist from './datalist';
import ChartSeries from './chartSeries';

const ControlPanel = ({ datasets }) => {
  return (
    <Styled>
      <Segment>
        <h3>Datasets</h3>
        <Datalist datasets={datasets} />
      </Segment>
      <Segment>
        <h3>Chart Types</h3>
        <ChartSeries active="Arc" />
      </Segment>
    </Styled>
  );
};

ControlPanel.propTypes = {
  dataset: PropTypes.object,
}

export default ControlPanel;
