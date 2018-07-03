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
			hiCellTemp: (this.props.hiCellTemp).toFixed(1),
      loCellTemp: (this.props.loCellTemp).toFixed(1),
      avgCellTemp: (this.props.avgCellTemp).toFixed(1),
      deltaHiCellVoltage: 0,
      deltaLoCellVoltage: 0,
      deltaHiCellTemp: 0,
      deltaLoCellTemp: 0,
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
      hiCellTemp: (nextProps.hiCellTemp).toFixed(1),
      loCellTemp: (nextProps.loCellTemp).toFixed(1),
      avgCellTemp: (nextProps.avgCellTemp).toFixed(1),
      deltaHiCellTemp: (this.props.hiCellTemp - nextProps.hiCellTemp).toFixed(1),
      deltaLoCellTemp: (this.props.loCellTemp - nextProps.loCellTemp).toFixed(1),
		});}
	render() {
		const {hiCellTemp, loCellTemp, avgCellTemp} = this.state;
		const {deltaHiCellTemp, deltaLoCellTemp} = this.state;
		return  (
      <div className="widget">
        <div className="sub">
          <h2>Avg. cell Temp.</h2>
          <div className="value">{avgCellTemp}<span> &deg;C</span></div>
        </div>
        <div id="delta-values" className="sub cluster">
          <div className="sub-inline-50">
            <h2>Delta Hi-cell Temp.</h2>
            <div className="value">{deltaHiCellTemp}<span> &deg;C</span></div>
          </div>
          <div className="sub-inline-50">
            <h2>Delta Lo-cell Temp.</h2>
            <div className="value">{deltaLoCellTemp}<span> &deg;C</span></div>
          </div>
        </div>
        <div className="sub cluster">
          <div className="sub-inline-50">
            <h3>Hi-cell Temp.</h3>
            <div className="value">{hiCellTemp}</div><span> &deg;C</span><div/>
          </div>
          <div className="sub-inline-50">
            <h3>Lo-cell Temp.</h3>
            <div className="value">{loCellTemp}</div><span> &deg;C</span><div/>
          </div>
        </div>
      </div>
    );
	}
}

export default Secondary;