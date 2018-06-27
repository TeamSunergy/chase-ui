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
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
      hiCellTemp: (nextProps.hiCellTemp).toFixed(1),
      loCellTemp: (nextProps.loCellTemp).toFixed(1),
      avgCellTemp: (nextProps.avgCellTemp).toFixed(1),
		});}
	render() {
		const{ hiCellTemp, loCellTemp, avgCellTemp } = this.state;
		return  (
      <div className="widget">
        <div className="sub cluster">
          <div className="sub-inline-2">
            <h3>Hi-cell Temp.</h3>
            <div className="value">{hiCellTemp}</div><span> &deg;C</span><div/>
          </div>
          <div className="sub-inline-2">
            <h3>Lo-cell Temp.</h3>
            <div className="value">{loCellTemp}</div><span> &deg;C</span><div/>
          </div>
        </div>
        <div className="sub">
          <h2>Avg. cell Temp.</h2>
          <div className="value">{avgCellTemp}<span> &deg;C</span></div>
        </div>
      </div>
    );
	}
}

export default Secondary;