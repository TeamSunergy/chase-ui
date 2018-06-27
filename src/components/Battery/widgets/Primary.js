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
      packSummedVoltage: (this.props.packSummedVoltage).toFixed(4),
      packInstantaneousVoltage : (this.props.packInstantaneousVoltage).toFixed(4),
      packCurrent: (this.props.packCurrent).toFixed(3),
      packAmpHours: (this.props.packInstantaneousVoltage).toFixed(2),
      packHealth: (this.props.packInstantaneousVoltage).toFixed(0),
      batterySoc : (this.props.packInstantaneousVoltage).toFixed(0),
		};

		this.getSocImage = this.getSocImage.bind(this);
	}

	componentWillReceiveProps(nextProps) {
    this.setState({
      packSummedVoltage: (nextProps.packSummedVoltage).toFixed(4),
      packInstantaneousVoltage : (nextProps.packInstantaneousVoltage).toFixed(4),
      packCurrent: (nextProps.packCurrent).toFixed(3),
      packAmpHours: (nextProps.packInstantaneousVoltage).toFixed(2),
      packHealth: (nextProps.packInstantaneousVoltage).toFixed(0),
      batterySoc : (nextProps.packInstantaneousVoltage).toFixed(0),
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
		const { packSummedVoltage, packInstantaneousVoltage, packCurrent, packAmpHours,
      packHealth, batterySoc } = this.state;

		return  (
			<div id="primary" className="widget">
          <div className="sub">
            <h2>Pack Inst. Voltage</h2>
            <div className="value">{packInstantaneousVoltage}<span> volts</span></div>
          </div>
        <div className="sub">
          <h2>Pack Sum. Voltage</h2>
          <div className="value">{packSummedVoltage}<span> volts</span></div>
        </div>
        <div className="sub cluster">
          <div className="sub-inline-60">
            <h2>Battery Pack</h2>
            <div className="value">{packAmpHours}<span> Ah</span></div>
          </div>
          <div className="sub-inline-40">
            <h2>Battery Soc</h2>
            <div id="soc">
              <img className="soc-icon" src={this.getSocImage(batterySoc)} />
              <div className="value">{batterySoc}<span> %</span></div>
            </div>
          </div>

        </div>
			</div>
		);
	}
}

export default Primary;