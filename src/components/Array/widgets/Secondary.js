/**
 * Secondary widget Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';

class Secondary extends Component {
	constructor(props) {
		super(props);
		this.state = {
      subACurrent: this.props.subACurrent.toFixed(1),
      subBCurrent: this.props.subBCurrent.toFixed(1),
      subCCurrent: this.props.subCCurrent.toFixed(1),
      subAVoltage: this.props.subAVoltage.toFixed(1),
      subBVoltage: this.props.subBVoltage.toFixed(1),
      subCVoltage: this.props.subCVoltage.toFixed(1),
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
      subACurrent: nextProps.subACurrent,
      subBCurrent: nextProps.subBCurrent,
      subCCurrent: nextProps.subCCurrent,
      subAVoltage: nextProps.subAVoltage,
      subBVoltage: nextProps.subBVoltage,
      subCVoltage: nextProps.subCVoltage,
		});}
	render() {
		const{ subACurrent, subBCurrent, subCCurrent, subAVoltage, subBVoltage, subCVoltage, } = this.state;
		return  (
      <div className="widget">
        <div className="sub cluster">
          <div className="sub-inline-33">
            <h3>Sub-a Current</h3>
            <div className="value">{subACurrent}</div><span> amps</span><div/>
          </div>
          <div className="sub-inline-33">
            <h3>Sub-b Current</h3>
            <div className="value">{subBCurrent}</div><span> amps</span><div/>
          </div>
          <div className="sub-inline-33">
            <h3>Sub-c Current</h3>
            <div className="value">{subCCurrent}</div><span> amps</span><div/>
          </div>
        </div>
        <div className="sub cluster">
          <div className="sub-inline-33">
            <h3>Sub-a Voltage</h3>
            <div className="value">{subAVoltage}</div><span> volts</span><div/>
          </div>
          <div className="sub-inline-33">
            <h3>Sub-b Voltage</h3>
            <div className="value">{subBVoltage}</div><span> volts</span><div/>
          </div>
          <div className="sub-inline-33">
            <h3>Sub-c Voltage</h3>
            <div className="value">{subCVoltage}</div><span> volts</span><div/>
          </div>
        </div>
      </div>
    );
	}
}

export default Secondary;