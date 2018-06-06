/**
 * Secondary widget Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, { Component } from 'react';

class motorController extends Component {
	constructor(props) {
		super(props);
		this.state = {
			motorControllerPower: (this.props.motorControllerPower).toFixed(2),
			auxiliaryBatteryVoltage:  (this.props.auxiliaryBatteryVoltage).toFixed(2),
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			motorControllerPower: (nextProps.motorControllerPower).toFixed(2), 
			auxiliaryBatteryVoltage: (nextProps.auxiliaryBatteryVoltage).toFixed(2),
		});}
	render() {
		const{ motorControllerPower, auxiliaryBatteryVoltage } = this.state;
		return  (
      <div className="widget">
        <div className="sub">
          <h2>Motor Controller</h2>
          <div>{motorControllerPower}<span> watts</span></div>
        </div>
        <div className="sub">
          <h2>Aux. Battery</h2>
          <div>{auxiliaryBatteryVoltage}<span> volts</span></div>
        </div>
      </div>
    );
	}
}

export default motorController;