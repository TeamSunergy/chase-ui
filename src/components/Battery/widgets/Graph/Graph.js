import React, {Component} from 'react';
import update from 'immutability-helper';

import {Line, Bar, HorizontalBar, Pie, Polar, Radar, Bubble, Scatter, defaults} from 'react-chartjs-2';

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
    let dataKeys = [];
    for (let graph in graphs) {
      if (graphs.hasOwnProperty(graph)) {
        if (graphs[graph].name === 'packVoltageAndCurrent')
          dataKeys = ['packInstantaneousVoltage', 'packCurrent'];
        else dataKeys = [graphs[graph].name];
        newState = this.updateGraph(graphs[graph], nextProps, this.props, newState, dataKeys);
      }
      this.setState(newState);
    }
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
        chartComponentData[i] = graphs[graph];
        i++;
      }
    }
    let id = "#graph-";
    return chartComponentData.map((g) =>
        <div key={id + g.name} id={id + g.name} className={(this.props.selected.name === g.name) ? "show" : "hide"}>
          {
            (g.type === 'line') ? <Line data={g.data} options={g.options} redraw/>
            : (g.type === 'bar') ? <Bar data={g.data} options={g.options} redraw/>
            : (g.type === 'horizontalbar') ? <HorizontalBar data={g.data} options={g.options} redraw/>
            // : (g.type === 'pie') ? <Pie data={g.data} options={g.options} redraw/>
            : (g.type === 'radar') ? <Radar data={g.data} options={g.options} redraw/>
            // : (g.type === 'polar') ? <Polar data={g.data} options={g.options} redraw/>
            // : (g.type === 'bubble') ? <Bubble data={g.data} options={g.options} redraw/>
            // : (g.type === 'scatter') ? <Scatter data={g.data} options={g.options} redraw/>
            : <div>Chart type not found.</div>
          }
        </div>
    );
  }

  updateGraph(graph, newData, oldData, newState, dataKeys) {
    let {labels, datasets} = graph.data;
    let {graphs} = this.state;
    let currTime = new Date().toLocaleTimeString();
    let shouldUpdate = false;

    // For multiple data sets
    if (dataKeys.length > 1) {
      console.log("I got two pizza pies right ere");
      // NOTE: the first check for currTime makes it so the chart only gets updated once every second.
      if ((labels[labels.length-1] !== currTime)
          && ((newData[dataKeys[0]] !== oldData[dataKeys[0]]) || (newData[dataKeys[1]] !== oldData[dataKeys[1]]))) {
        console.log("I still GOT TWO pizza pies right ere");
        shouldUpdate = true;
        labels.push(currTime);
        if (labels.length > graph.xAxisMax) labels.shift();
        for (let i = 0; i < datasets.length; i++) {
          datasets[i].data.push(newData[dataKeys[i]]);
          console.log(newData[dataKeys[i]]);
          if (datasets[i].data.length > graph.xAxisMax) datasets[i].data.shift();
        }
      }
    } else { // For one data set
      console.log("I only GOT a ONE pizza pie");
      // NOTE: the first check for currTime makes it so the chart only gets updated once every second.
      if ((labels[labels.length-1] !== currTime) && (newData[dataKeys[0]] !== oldData[dataKeys[0]])) {
        shouldUpdate = true;
        labels.push(currTime);
        if (labels.length > graph.xAxisMax) labels.shift();
        datasets[0].data.push(newData[dataKeys[0]]);
        if (datasets[0].data.length > graph.xAxisMax) datasets[0].data.shift();
      }
    }

    if (shouldUpdate) {
      newState = update(graphs[graph.name], {
        data: {
          labels: {$set: labels},
          datasets: {$set: datasets}
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
  selectGraph: () => {},
};
export default Graph;