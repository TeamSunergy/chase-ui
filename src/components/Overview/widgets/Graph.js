import React from 'react';
import update from 'immutability-helper';

import {Line, Bar, defaults} from 'react-chartjs-2';
const styles = {
	graphs: {
	}
}
defaults.global.animation = false;
class motorController extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			speed: (this.props.speed).toFixed(2),
			graph: {
				labels: [],
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
					pointRadius: 1,
					pointHitRadius: 10,
					data: []
				},
				]
			}
		}
	}
	getLabels(){
		return this.state.graph.labels;
	}
	componentWillReceiveProps(nextProps) {
		let labels = this.state.graph.labels;
		labels.push(new Date().toLocaleTimeString());
		let datasets = this.state.graph.datasets;
		datasets[0].data.push(nextProps.speed);
		const newState = update(this.state, {
			graph:{
				labels: {$set: labels},
				datasets:{$set: datasets}
			}
		});
		this.setState(newState);
	}
	render() {
		return (
			<div style = {styles.graphs}>
			<Line data={this.state.graph} redraw/>
			</div>
			);
	}
}
export default motorController;