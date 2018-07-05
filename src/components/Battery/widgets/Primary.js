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
      packSummedVoltage: (this.props.packSummedVoltage).toFixed(1),
      packInstantaneousVoltage : (this.props.packInstantaneousVoltage).toFixed(1),
      packCurrent: (this.props.packCurrent).toFixed(3),
      packAmpHours: (this.props.packAmpHours).toFixed(2),
      packHealth: (this.props.packHealth).toFixed(0),
      batterySoc : (this.props.batterySoc).toFixed(0),
      hiCellVoltage : (this.props.hiCellVoltage).toFixed(1),
      loCellVoltage : (this.props.loCellVoltage).toFixed(1),
      deltaHiCellVoltage : 0,
      deltaLoCellVoltage : 0,
		};

		this.getSocImage = this.getSocImage.bind(this);
	}

	componentWillReceiveProps(nextProps) {
    this.setState({
      packSummedVoltage: (nextProps.packSummedVoltage).toFixed(1),
      packInstantaneousVoltage : (nextProps.packInstantaneousVoltage).toFixed(1),
      packCurrent: (nextProps.packCurrent).toFixed(3),
      packAmpHours: (nextProps.packAmpHours).toFixed(2),
      packHealth: (nextProps.packHealth).toFixed(0),
      batterySoc : (nextProps.batterySoc).toFixed(0),
      hiCellVoltage : (nextProps.hiCellVoltage).toFixed(1),
      loCellVoltage : (nextProps.loCellVoltage).toFixed(1),
      deltaHiCellVoltage : (this.props.hiCellVoltage - nextProps.hiCellVoltage).toFixed(1),
      deltaLoCellVoltage : (this.props.loCellVoltage - nextProps.loCellVoltage).toFixed(1),
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
      packHealth, batterySoc, deltaHiCellVoltage, deltaLoCellVoltage } = this.state;

		return  (
			<div id="primary" className="widget">
        <div className="sub cluster">
          <div className="sub-inline-50">
            <h2>Pack Inst. Volt.</h2>
            <div className="value">{packInstantaneousVoltage}<span> volts</span></div>
          </div>
          <div className="sub-inline-50">
            <h2>Pack Sum. Volt.</h2>
            <div className="value">{packSummedVoltage}<span> volts</span></div>
          </div>
        </div>
        <div id="delta-values" className="sub cluster">
          <div className="sub-inline-50">
            <h3>Delta Hi-cell Volt.</h3>
            <div className="value">{deltaHiCellVoltage}<span> volts</span></div>
          </div>
          <div className="sub-inline-50">
            <h3>Delta Lo-cell Volt.</h3>
            <div className="value">{deltaLoCellVoltage}<span> volts</span></div>
          </div>
        </div>
        <div id="pack" className="sub">
          <h2>Pack Current</h2>
          <div className="value">{packCurrent}<span> watts</span></div>
        </div>
        <div className="sub cluster">
          <div className="sub-inline-60">
            <h2>Pack Charge</h2>
            <div className="value">{packAmpHours}<span> Ah</span></div>
          </div>
          <div className="sub-inline-40">
            <h2>Soc</h2>
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