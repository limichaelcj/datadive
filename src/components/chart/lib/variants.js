import {
  ArcSeries,
  AreaSeries,
  ContourSeries,
  HeatmapSeries,
  HorizontalBarSeries,
  LabelSeries,
  LineSeries,
  MarkSeries,
  PolygonSeries,
  RectSeries,
  VerticalBarSeries,
} from 'react-vis';

export default {
  Arc: {
    name: 'Arc',
    component: ArcSeries,
  },
  Area: {
    name: 'Area',
    component: AreaSeries,
  },
  Contour: {
    name: 'Contour',
    component: ContourSeries,
  },
  Heatmap: {
    name: 'Heatmap',
    component: HeatmapSeries,
  },
  HorizontalBar: {
    name: 'Horizontal Bar',
    component: HorizontalBarSeries,
  },
  Label: {
    name: 'Label',
    component: LabelSeries,
  },
  Line: {
    name: 'Line',
    component: LineSeries,
  },
  Mark: {
    name: 'Mark',
    component: MarkSeries,
  },
  Polygon: {
    name: 'Polygon',
    component: PolygonSeries,
  },
  Rect: {
    name: 'Rect',
    component: RectSeries,
  },
  VerticalBar: {
    name: 'Vertical Bar',
    component: VerticalBarSeries,
  },
}
