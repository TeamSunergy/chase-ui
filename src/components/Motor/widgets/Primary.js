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
      busCurrent: (this.props.busCurrent).toFixed(2),
      busVoltage:  (this.props.busVoltage).toFixed(3),
      vehicleVelocity:  (this.props.vehicleVelocity).toFixed(1),
      motorVelocity:  (this.props.motorVelocity).toFixed(1),
      odometer:  (this.props.odometer).toFixed(2),
		};

		this.getSocImage = this.getSocImage.bind(this);
	}

	componentWillReceiveProps(nextProps) {
    this.setState({
      busCurrent: (nextProps.busCurrent).toFixed(2),
      busVoltage:  (nextProps.busVoltage).toFixed(3),
      vehicleVelocity:  (nextProps.vehicleVelocity).toFixed(1),
      motorVelocity:  (nextProps.motorVelocity).toFixed(1),
      odometer:  (nextProps.odometer).toFixed(2),
		});
	}

	getSocImage(batterySOC) {
	  let loc = window.location.origin + "/images/battery-icons/";
	  if (batterySOC >= 91) {
	    return loc + "battery_full.svg";
    }
    if (batterySOC >= 81) {
      return loc + "battery_90.svg";
    }
    if (batterySOC >= 61) {
      return loc + "battery_80.svg";
    }
    if (batterySOC >= 51) {
      return loc + "battery_60.svg";
    }
    if (batterySOC >= 31) {
      return loc + "battery_50.svg";
    }
    if (batterySOC >= 21) {
      return loc + "battery_30.svg";
    }
    if (batterySOC >= 1) {
      return loc + "battery_20.svg";
    }
    // Default
    return loc + "battery_full.svg";
  }

	render() {
    const { busCurrent, busVoltage, vehicleVelocity, motorVelocity, odometer } = this.state;

		return  (
			<div id="primary" className="widget">
          <div className="sub">
            <h2>Bus Current</h2>
            <div className="value">{busCurrent}<span> watts</span></div>
          </div>
        <div className="sub">
          <h2>Bus Voltage</h2>
          <div className="value">{busVoltage}<span> volts</span></div>
        </div>
        <div className="sub cluster">
          <div className="sub-inline-2">
            <h2>Vehicle Vel.</h2>
            <div className="value">{vehicleVelocity}<span> mph</span></div>
          </div>
          <div className="sub-inline-2">
            <h2>Motor Vel.</h2>
            <div className="value">{motorVelocity}<span> mph</span></div>
          </div>
        </div>
			</div>
		);
	}
}

export default Primary;