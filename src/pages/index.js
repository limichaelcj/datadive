import React from 'react';
import { Link } from 'gatsby';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FlexParent from '../components/flex/parent';
import FlexChild from '../components/flex/child';

const IndexPage = () => (
  <Layout>
    <SEO title="Data Dive" />
    <h1>Data Dive</h1>
    <FlexParent direction="row">

      {/* Left Panel */}
      <FlexChild basis="20rem">
        <h3>Chart Types</h3>
        <ul>
          {[1,2,3,4,5,6].map((v,i) => (
            <li key={i}>
              <strong>Chart Type {v}</strong>
              <p>Description of chart type {v}...</p>
            </li>
          ))}
        </ul>
      </FlexChild>

      {/* Right Panel */}
      <FlexChild grow="1" shrink="1">
        <h3>Chart Visualizer</h3>
        <div id="chart" />
      </FlexChild>

    </FlexParent>
  </Layout>
);

export default IndexPage;
