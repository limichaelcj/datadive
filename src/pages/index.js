import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Header from '../components/header/header';
import Flexbox from '../components/flex/flexbox';
import Segment from '../components/segment/segment';
import ControlPanel from '../components/control/panel';
import Chart from '../components/chart/chart';
import NewChart from '../components/chart/new';

const IndexPage = () => {

  const [state, setState] = React.useState({
    selected: null,
    data: {},
    charts: {},
  });

  // creates a new chart with no data
  const createChart = () => {
    setState({
      ...state,
      charts: {
        ...state.charts,
        [Object.keys(state.charts).length]: {
          datakey: null,
          series: 'Line',
        },
      },
    });
  };

  const selectChart = (key) => () => {
    setState({
      ...state,
      selected: key,
    })
  };

  const setSeries = (series) => () => {
    setState({
      ...state,
      charts: {
        ...state.charts,
        [state.selected]: {
          ...state.charts[state.selected],
          series,
        }
      }
    })
  }

  // functon generator:
  // generates random data for the selected chart
  const generateRandom = () => {

    const datakey = Object.keys(state.data).length;

    setState({
      ...state,
      data: {
        ...state.data,
        [datakey]: Array(10).fill(0).map((_,i) => ({
          x: i,
          y: Math.floor(Math.random()*10),
        })),
      },
    });
  };

  // link data to chart
  const linkDataToChart = (chartkey) => (datakey) => {
    setState({
      ...state,
      charts: {
        ...state.charts,
        [chartkey]: {
          ...state.charts[chartkey],
          datakey,
        }
      }
    });
  };

  console.log(state)

  return (
    <Layout>
      <SEO title="Data Dive" />
      <Header />
      <Flexbox parent direction="row" style={{position: 'relative', zIndex: 0}}>

        {/* Left Panel */}
        <Flexbox child basis="20rem">
          <ControlPanel
            datasets={state.data}
            selectedSeries={state.selected ? state.charts[state.selected].series : null}
            setSeries={setSeries}
            generateRandom={generateRandom}
          />
        </Flexbox>

        {/* Right Panel */}
        <Flexbox child grow="1" shrink="1">
          <Segment>
            <Segment padding="0 1rem">
              <h2>Charts</h2>
            </Segment>
            <Flexbox parent direction="row" flexwrap align="center">
              {Object.entries(state.charts).map(([key, chart]) => (
                <Chart
                  key={key}
                  name={chart.datakey || null}
                  dataset={state.data[chart.datakey]}
                  variant={chart.series}
                  active={state.selected === key}
                  selectChart={selectChart(key)}
                  linkData={linkDataToChart(key)}
                />
              ))}
              <NewChart onClick={createChart} />
            </Flexbox>
          </Segment>
        </Flexbox>

      </Flexbox>
    </Layout>
  );
};

export default IndexPage;
