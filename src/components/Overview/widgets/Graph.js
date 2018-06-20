import React, {Component} from 'react';
import update from 'immutability-helper';
import Selector from './Selector';

import {Line, Bar, defaults} from 'react-chartjs-2';
const styles = {
	graphs: {
	}
};

defaults.global.animation = false;

class Graph extends Component {
	constructor(props) {
		super(props);
		this.state = {
			speed: (this.props.speed).toFixed(2),
			graphNetPower: {
				labels: ["0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM"],
				datasets: [
				{
					label: 'Net Power (watts)',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(75,192,192,0.4)',
					borderColor: 'rgba(75,192,192,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(75,192,192,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(75,192,192,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 5,
					pointHitRadius: 10,
					data: []
				}],
			},
      graphOther: {
        labels: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        datasets: [
          {
            label: 'Net Power (watts)',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: []
          }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 75,
              min: 0,
              stepSize: 5
            }
          }]
        },
        maintainAspectRatio: false,
        responsive: true,
      }
		};
    this.setGraph = this.setGraph.bind(this);
	}

	componentWillReceiveProps(nextProps) {
    /** TODO
     *  Pretty sure this is making the graph weird when you switch back and forth.
     *  A node gets added each time the graph is selected. 
     */
	  let {graphNetPower, graphOther} = this.state;
	  let labels, datasets, newState;
	  if (this.props.selectedGraph === 0) {
      labels = graphNetPower.labels;
      datasets = graphNetPower.datasets;
      labels.push(new Date().toLocaleTimeString());
      if (labels.length > 12) labels.shift();
      datasets[0].data.push(nextProps.speed);
      if (datasets[0].data.length > 12) datasets[0].data.shift();
      newState = update(this.state, {
        graphNetPower: {
          labels: {$set: labels},
          datasets: {$set: datasets}
        },
      });
      this.setState(newState);
    }
    if (this.props.selectedGraph === 1) {
      labels = graphOther.labels;
      datasets = graphOther.datasets;
      labels.push(new Date().toLocaleTimeString());
      if (labels.length > 12) labels.shift();
      datasets[0].data.push(nextProps.speed);
      if (datasets[0].data.length > 12) datasets[0].data.shift();
      newState = update(this.state, {
        graphOther: {
          labels: {$set: labels},
          datasets: {$set: datasets}
        },
      });
      this.setState(newState);
    }
	}

  setGraph() {
	  console.log(this.props.selectedGraph);
    if (this.props.selectedGraph === 0)
      return <Line data={this.state.graphNetPower} options={this.state.options} redraw/>;
    if (this.props.selectedGraph === 1)
      return <Line data={this.state.graphOther} options={this.state.options} redraw/>;
  }

	render() {
    let {selectedGraph} = this.props;
		return (
		  <div id="net-power-graph" className="widget sub">
        <Selector selected={selectedGraph} selectGraph={this.props.selectGraph}/>
        {(selectedGraph === 0) ? <h2>Graph – Net Power</h2> : <h2>Graph – Other</h2>}
        <div className="helpme">
          {this.setGraph()}
        </div>
      </div>
    );
	}
}

Graph.defaultProps = {
  selectedGraph: 0,
  selectGraph: () => {}
};
export default Graph;