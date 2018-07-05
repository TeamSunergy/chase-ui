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
      arrayTotalPower: this.props.arrayTotalPower,
      subAPower: this.props.subAPower,
      subBPower: this.props.subBPower,
      subCPower: this.props.subCPower
		};
	}

	componentWillReceiveProps(nextProps) {
    this.setState({
      arrayTotalPower: nextProps.arrayTotalPower,
      subAPower : nextProps.subAPower,
      subBPower: nextProps.subBPower,
      subCPower: nextProps.subCPower,
		});
	}

	render() {
		const { arrayTotalPower, subAPower, subBPower, subCPower} = this.state;

		return  (
			<div id="primary" className="widget">
        <div className="sub">
          <h2>Array Total Power</h2>
          <div className="value">{arrayTotalPower}<span> watts</span></div>
        </div>
        <div className="sub cluster">
          <div className="sub-inline-33">
            <h2>sub-a</h2>
            <div className="value">{subAPower}<span> watts</span></div>
          </div>
          <div className="sub-inline-33">
            <h2>sub-b</h2>
            <div className="value">{subBPower}<span> watts</span></div>
          </div>
          <div className="sub-inline-33">
            <h2>sub-c</h2>
            <div className="value">{subCPower}<span> watts</span></div>
          </div>
        </div>
			</div>
		);
	}
}

export default Primary;