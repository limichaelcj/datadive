import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Flexbox from '../components/flex/flexbox';
import Chart from '../components/chart/chart';

const initialState = {
  chartType: 'xyplot',
  data: [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ],
}

const IndexPage = () => {

  const [state, setState] = React.useState({
    ...initialState,
    data: [...initialState.data],
  });

  return (
    <Layout>
      <SEO title="Data Dive" />
      <h1>Data Dive</h1>
      <Flexbox parent direction="row">

        {/* Left Panel */}
        <Flexbox child basis="20rem">
          <h3>Chart Types</h3>
          <ul>
            {[1,2,3,4,5,6].map((v,i) => (
              <li key={i}>
                <strong>Chart Type {v}</strong>
                <p>Description of chart type {v}...</p>
              </li>
            ))}
          </ul>
        </Flexbox>

        {/* Right Panel */}
        <Flexbox child grow="1" shrink="1">
          <h3>Chart Visualizer</h3>
          <Chart dataset={state.data} />
        </Flexbox>

      </Flexbox>
    </Layout>
  );
};

export default IndexPage;
