import React, {Component} from 'react';
import update from 'immutability-helper';

import {Line, Bar, defaults} from 'react-chartjs-2';

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

	componentWillReceiveProps(nextProps) {
    let newState = {};
    let {graphs} = this.state;
    for (let graph in graphs) {
      if (graphs.hasOwnProperty(graph)) {
        newState = this.updateGraph(graphs[graph], nextProps, this.props, newState, graphs[graph].name);
      }
      this.setState(newState);
    }
  }

  setup() {
    let {graphs} = this.state;

  }

  componentDidMount() {
	  if (this.props.selected === '_default')
      document.getElementsByClassName("chart-container")[0].getElementsByTagName("div")[0].className = "show";
  }

  setupCharts() {
	  let chartComponentData = [];
	  let i = 0;
    let {graphs} = this.state;
    for (let graph in graphs) {
      if (graphs.hasOwnProperty(graph)) {
        let g = graphs[graph];
        chartComponentData[i] = g;
        i++;
      }
    }
    let id = "#graph-";
    return chartComponentData.map((g) =>
        <div id={id + g.key} className={(this.props.selected.key === g.name) ? "show" : "hide"}>
          <Line data={g.data} options={g.options} redraw/>
        </div>
    );
  }

  updateGraph(graph, newData, oldData, newState, dataKey) {
    let {labels, datasets} = graph.data;
    let {graphs} = this.state;
    let currTime = new Date().toLocaleTimeString();
    let shouldUpdate = false;
    // NOTE: this check for currTime makes it so the chart only gets updated once every millisecond.
    if ((labels[11] !== currTime) && (newData[dataKey] !== oldData[dataKey])) {
      shouldUpdate = true;
      labels.push(currTime);
      if (labels.length > 12) labels.shift();
      datasets[0].data.push(newData[dataKey]);
      if (datasets[0].data.length > 12) datasets[0].data.shift();
    }
    if (shouldUpdate) {
      newState = update(graphs[dataKey], {
        data: {
          labels: {$set: labels},
          datasets: {$set: datasets}
        }
      });
    }
    return newState;
  }

	render() {
    let {selected} = this.props;
    let {graphs} = this.state;
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
  selectGraph: () => {},
};
export default Graph;