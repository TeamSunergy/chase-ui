import React, { Component } from 'react';
import update from 'immutability-helper';

import { Line, Bar, HorizontalBar, Radar, defaults } from 'react-chartjs-2';
//import {Pie, Polar,  Bubble, Scatter} from 'react-chartjs-2';

defaults.global.animation = false;
defaults.global.defaultFontSize = 11;

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphs: this.props.graphSet,
      charts: []
    };
    this.updateGraph = this.updateGraph.bind(this);
    this.setupCharts = this.setupCharts.bind(this);
  }

  componentDidMount() {
    this.props.shareMethods(this.clearGraph.bind(this))
    if (this.props.selected === '_default') {
      document.getElementsByClassName("chart-container")[0].getElementsByTagName("div")[0].className = "show";
    }
  }

  componentWillReceiveProps(nextProps) {
    let newState = {};
    let { graphs } = this.state;
    for (let graph in graphs) {
      if (graphs.hasOwnProperty(graph)) {
        newState = this.updateGraph(graphs[graph], nextProps, this.props, newState, graphs[graph].name);
      }
      this.setState(newState);
    }

  }

  clearGraph(graphName) {
    let { graphs } = this.state;
    if (graphName != null) {
      graphs[graphName].data.labels = [];
      graphs[graphName].data.datasets[0].data = [];
      this.setState(graphs);
    }
  }

  setupCharts() {
    let chartComponentData = [];
    let i = 0;
    let { graphs } = this.state;
    for (let graph in graphs) {
      if (graphs.hasOwnProperty(graph)) {
        chartComponentData[i] = graphs[graph];
        i++;
      }
    }
    let id = "#graph-";
    return chartComponentData.map((g) =>
      <div key={id + g.name} id={id + g.name} className={(this.props.selected.name === g.name) ? "show" : "hide"}>
        {
          (g.type === 'line') ? <Line data={g.data} options={g.options} redraw />
            : (g.type === 'bar') ? <Bar data={g.data} options={g.options} redraw />
              : (g.type === 'horizontalbar') ? <HorizontalBar data={g.data} options={g.options} redraw />
                // : (g.type === 'pie') ? <Pie data={g.data} options={g.options} redraw/>
                : (g.type === 'radar') ? <Radar data={g.data} options={g.options} redraw />
                  // : (g.type === 'polar') ? <Polar data={g.data} options={g.options} redraw/>
                  // : (g.type === 'bubble') ? <Bubble data={g.data} options={g.options} redraw/>
                  // : (g.type === 'scatter') ? <Scatter data={g.data} options={g.options} redraw/>
                  : <div>Chart type not found.</div>
        }
      </div>
    );
  }

  updateGraph(graph, newData, oldData, newState, dataKey) {
    let { labels, datasets } = graph.data;
    let { graphs } = this.state;
    let currTime = new Date().toLocaleTimeString();
    let shouldUpdate = false;
    // NOTE: this check for currTime makes it so the chart only gets updated once every second.
    if (graph.name !== 'netPowerGauge') {
      if ((labels[11] !== currTime) && (newData[dataKey] !== oldData[dataKey])) {
        shouldUpdate = true;
        labels.push(currTime);
        if (labels.length > 12) labels.shift();
        datasets[0].data.push(newData[dataKey]);
        if (datasets[0].data.length > 12) datasets[0].data.shift();
      }
    } else {
      if ((labels[0] !== currTime) && (newData[dataKey] !== oldData[dataKey])) {
        shouldUpdate = true;
        labels.push(currTime);
        labels.shift();
        datasets[0].data.push(newData[dataKey]);
        datasets[0].data.shift();
      }
    }
    if (shouldUpdate) {
      newState = update(graphs[dataKey], {
        data: {
          labels: { $set: labels },
          datasets: { $set: datasets }
        }
      });
    }
    return newState;
  }

  render() {
    return (
      <div className="chart-container">
        {this.setupCharts()}
      </div>
    );
  }
}

Graph.defaultProps = {
  selected: "_default",
  graphSet: {},
  selectGraph: () => { },
  shareMethods: () => { },
};
export default Graph;