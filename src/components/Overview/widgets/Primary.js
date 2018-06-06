/**
 * Primary widget Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, { Component } from 'react';

class Primary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//speed: Math.round(this.props.speed),
			batteryVoltage: (this.props.batteryVoltage).toFixed(2),
      arrayTotalPower: (this.props.arrayTotalPower).toFixed(2),
			arrayAPower : (this.props.arrayAPower).toFixed(2),
			arrayBPower : (this.props.arrayBPower).toFixed(2),
			arrayCPower : (this.props.arrayCPower).toFixed(2),
		}
	}
	componentWillReceiveProps(nextProps) {

    console.log(nextProps);

    this.setState({
			speed: Math.round(nextProps.speed),
			batteryVoltage: (nextProps.batteryVoltage).toFixed(2),
      arrayTotalPower: (nextProps.arrayTotalPower).toFixed(2),
			arrayAPower: (nextProps.arrayAPower).toFixed(2),
			arrayBPower: (nextProps.arrayBPower).toFixed(2),
			arrayCPower: (nextProps.arrayCPower).toFixed(2),
		});
	}
	render() {
		const{ speed, batteryVoltage, arrayTotalPower, arrayAPower, arrayBPower, arrayCPower } = this.state;
		return  (
			<div className="widget">
          <div className="sub">
            <h2>Speed</h2>
            <div>{speed}<span> mph</span></div>
          </div>
          <div className="sub">
						<h2>Battery</h2>
						<div>{batteryVoltage} volts</div>
					</div>
        <div className="sub">
          <h2>Array</h2>
          <div>{arrayTotalPower} watts</div>
        </div>
          <div className="sub">
            <div className="sub-inline">
              <h3>sub-a</h3>
              <div>{arrayAPower}</div><span>watts</span><div/>
            </div>
            <div className="sub-inline">
              <h3>sub-b</h3>
              <div>{arrayBPower}</div><span>watts</span><div/>
            </div>
            <div className="sub-inline">
              <h3>sub-c</h3>
              <div>{arrayCPower}</div><span>watts</span><div/>
            </div>
          </div>
			</div>
		);
	}
}

export default Primary;