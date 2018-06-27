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
			speed: Math.round(this.props.speed),
			batteryVoltage: (this.props.batteryVoltage).toFixed(2),
      batterySoc: (this.props.batterySoc),
      arrayTotalPower: (this.props.arrayTotalPower).toFixed(2),
			arrayAPower : (this.props.arrayAPower).toFixed(2),
			arrayBPower : (this.props.arrayBPower).toFixed(2),
			arrayCPower : (this.props.arrayCPower).toFixed(2),
		};

		this.getSocImage = this.getSocImage.bind(this);
	}

	componentWillReceiveProps(nextProps) {
    this.setState({
			speed: Math.round(nextProps.speed),
			batteryVoltage: (nextProps.batteryVoltage).toFixed(2),
      batterySoc: (nextProps.batterySoc),
      arrayTotalPower: (nextProps.arrayTotalPower).toFixed(2),
			arrayAPower: (nextProps.arrayAPower).toFixed(2),
			arrayBPower: (nextProps.arrayBPower).toFixed(2),
			arrayCPower: (nextProps.arrayCPower).toFixed(2),
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
		const { speed, batteryVoltage, batterySoc, arrayTotalPower, arrayAPower, arrayBPower, arrayCPower } = this.state;

		return  (
			<div id="primary" className="widget">
          <div className="sub">
            <div className="wrapper">
              <h2>Speed</h2>
              <div className="value">{speed}<span> mph</span></div>
            </div>
          </div>
          <div className="sub cluster">
            <div className="sub-inline-60">
              <h2>Pack Inst.</h2>
              <div className="value">{batteryVoltage}<span> volts</span></div>
            </div>
            <div className="sub-inline-40">
              <h2>SOC</h2>
              <div id="soc">
                <img className="soc-icon" src={this.getSocImage(batterySoc)} />
                <div className="value">{batterySoc}<span> %</span></div>
              </div>
            </div>
					</div>
        <div className="sub">
          <h2>Array</h2>
          <div className="value">{arrayTotalPower}<span> watts</span></div>
        </div>
          <div className="sub cluster">
            <div className="sub-inline-3">
              <h3>sub-a</h3>
              <div className="value">{arrayAPower}</div><span>watts</span><div/>
            </div>
            <div className="sub-inline-3">
              <h3>sub-b</h3>
              <div className="value">{arrayBPower}</div><span>watts</span><div/>
            </div>
            <div className="sub-inline-3">
              <h3>sub-c</h3>
              <div className="value">{arrayCPower}</div><span>watts</span><div/>
            </div>
          </div>
			</div>
		);
	}
}

export default Primary;