/**
 * Primary widget Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, { Component } from 'react';

const styles = {
	units: {
		'paddingLeft' : '5px',
		'fontSize' : '20px'
	},
	box1:{
		"paddingLeft": "30px",
	},
	box2:{
		"paddingLeft": "30px",
	},
	box3:{
		"borderRight": ".1px solid #d3d3d3",
		"textAlign": "center",
	},
	boxesContent: {
		overflow:"hidden",
		"marginBottom" : "15px",
	},
};

class Primary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			speed: (this.props.speed).toFixed(2),
			batteryVoltage: (this.props.batteryVoltage).toFixed(2),
			arrayAPower : (this.props.arrayAPower).toFixed(2),
			arrayBPower : (this.props.arrayBPower).toFixed(2),
			arrayCPower : (this.props.arrayCPower).toFixed(2),
		}
	}
	componentWillReceiveProps(nextProps) {

    console.log(nextProps);

    this.setState({
			speed: (nextProps.speed).toFixed(2), 
			batteryVoltage: (nextProps.batteryVoltage).toFixed(2),
			arrayAPower: (nextProps.arrayAPower).toFixed(2),
			arrayBPower: (nextProps.arrayBPower).toFixed(2),
			arrayCPower: (nextProps.arrayCPower).toFixed(2),
		});
	}
	render() {
		const{ speed, batteryVoltage, arrayAPower, arrayBPower, arrayCPower } = this.state;
		return  (
			<div>
				<div className="row">
          <div className="widget speed">
            <h2>Speed</h2>
            <div>{speed}<span>mph</span></div>
          </div>
				</div>
				<hr/>
				<div className="row">
						<div className="col-md-12" >
						<h3>Battery</h3>
						<h1>{ batteryVoltage }<span style={ styles.units }>volts</span></h1>
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-4 col-sm-4 col-4">
					<h4>sub-a</h4><h2>{arrayAPower}</h2><h5>watts</h5>
					</div>
					<div className="col-md-4 col-sm-4 col-4">
					<h4>sub-b</h4><h2>{arrayBPower}</h2><h5>watts</h5>
					</div>
					<div className="col-md-4 col-sm-4 col-4">
					<h4>sub-c</h4><h2>{arrayCPower}</h2><h5>watts</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default Primary;