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
      motorTemp: (this.props.motorTemp).toFixed(1),
      dspBoardTemp:  (this.props.dspBoardTemp).toFixed(1),
      slipSpeed:  (this.props.slipSpeed).toFixed(2),
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      motorTemp:  (nextProps.motorTemp).toFixed(1),
      dspBoardTemp:  (nextProps.dspBoardTemp).toFixed(1),
      slipSpeed:  (nextProps.slipSpeed).toFixed(2),
    });}
  render() {
    const { motorTemp, dspBoardTemp, slipSpeed } = this.state;
    return  (
        <div className="widget">
          <div className="sub cluster">
            <div className="sub-inline-50">
              <h2>Motor Temp.</h2>
              <div className="value">{slipSpeed}<span> &deg;C</span></div>
            </div>
            <div className="sub-inline-50">
              <h2>DSP Temp.</h2>
              <div className="value">{slipSpeed}<span> &deg;C</span></div>
            </div>
          </div>
          <div className="sub">
            <h2>Slip Speed</h2>
            <div className="value">{slipSpeed}<span> %</span></div>
          </div>


        </div>
    );
	}
}

export default Secondary;