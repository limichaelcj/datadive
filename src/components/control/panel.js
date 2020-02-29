import React from 'react';
import PropTypes from 'prop-types';
import Styled from './panel.css';
import Segment from '../segment/segment';
import Datalist from './datalist';

const ControlPanel = ({ datasets }) => {
  return (
    <Styled>
      <Segment>
        <h3>Datasets</h3>
        <Datalist datasets={datasets} />
      </Segment>
      <Segment>
        <h3>Chart Types</h3>
        <ul>
          {[1,2,3,4,5,6].map((v,i) => (
            <li key={i}>
              <strong>Chart Type {v}</strong>
              <p>Description of chart type {v}...</p>
            </li>
          ))}
        </ul>
      </Segment>
    </Styled>
  );
};

export default ControlPanel;
