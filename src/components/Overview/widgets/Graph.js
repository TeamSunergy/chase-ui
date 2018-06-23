import React, {Component} from 'react';
import update from 'immutability-helper';

import {Line, Bar, defaults} from 'react-chartjs-2';

defaults.global.animation = false;
defaults.global.defaultFontSize = 11;

class Graph extends Component {
	constructor(props) {
		super(props);
		this.state = {
			speed: (this.props.speed).toFixed(2),
			graphNetPower: {
				labels: ["0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM", "0:00:00 AM"],
				datasets: [
				{
					label: 'Vehicle Velocity (mph)',
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
            label: 'Battery SOC (%)',
            fill: false,
            lineTension: 0.5,
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
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: true,
              color: "rgba(255,99,132,0.2)"
            },
            ticks: {
              max: 75,
              min: 0,
              stepSize: 5
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      },
      options2: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false,
              color: "rgba(255,99,132,0.2)"
            },
            ticks: {
              max: 100,
              min: 0,
              stepSize: 5
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
		};
	}

	componentWillReceiveProps(nextProps) {
	  // TODO: Convert this to a for each?
    // I can imagine this entire Component with an array of the graphs-to-display (based on Parent component/page)
    // that is initialized in the constructor. Then here using a for each to set its values.
    // In general, creating some sort of graph/chart framework that is more extensible makes sense.
	  let {graphNetPower, graphOther} = this.state;
	  let labels1, labels2, datasets1, datasets2, currTime, newState;
    labels1 = graphNetPower.labels;
    datasets1 = graphNetPower.datasets;
    currTime = new Date().toLocaleTimeString();
    let shouldUpdate = false;
    // NOTE: this check for currTime makes it so the chart only gets updated once every millisecond.
    if ((labels1[11] !== currTime) && (nextProps.speed !== this.props.speed)) {
      shouldUpdate = true;
      labels1.push(currTime);
      if (labels1.length > 12) labels1.shift();
      datasets1[0].data.push(nextProps.speed);
      if (datasets1[0].data.length > 12) datasets1[0].data.shift();
    }

    labels2 = graphOther.labels;
    datasets2 = graphOther.datasets;
    currTime = new Date().toLocaleTimeString();
    if ((labels2[11] !== currTime) && (nextProps.batterySoc !== this.props.batterySoc)) {
      shouldUpdate = true;
      labels2.push(new Date().toLocaleTimeString());
      if (labels2.length > 12) labels2.shift();
      datasets2[0].data.push(nextProps.batterySoc);
      if (datasets2[0].data.length > 12) datasets2[0].data.shift();
    }

    if (shouldUpdate) {
      newState = update(this.state, {
        graphNetPower: {
          labels: {$set: labels1},
          datasets: {$set: datasets1}
        },
        graphOther: {
          labels: {$set: labels2},
          datasets: {$set: datasets2}
        },
      });
      this.setState(newState);
    }
	}

	render() {
    let {selected} = this.props;
		return (
      <div className="chart-container">
        <div className={(selected === 0) ? "show" : "hide"}>
          <Line data={this.state.graphNetPower} options={this.state.options} redraw/>
        </div>
        <div className={(selected === 1) ? "show" : "hide"}>
          <Line data={this.state.graphOther} options={this.state.options2} redraw/>
        </div>
      </div>
    );
	}
}

Graph.defaultProps = {
  selected: 0,
  selectGraph: () => {}
};
export default Graph;