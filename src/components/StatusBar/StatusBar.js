/**
 * TitleBar Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';
import NotificationCenter from './NotificationCenter';

class StatusBar extends Component {
  render() {
    return (
        <div id="status-bar">
          <NotificationCenter />
          <div id="status-title"><h1>{ this.props.title }</h1></div>
          <div id="status-info">
              <div className="info-item">
                <div className="data">{ this.props.speed.toFixed(0) } MPH</div>
                <div className="info-label">Speed</div>
              </div>
              <div className="info-item">
                <div className="data">{ this.props.batteryVoltage.toFixed(1) } V</div>
                <div className="info-label">Battery</div>
              </div>
              <div className="info-item">
                <div className="data">{ this.props.netPower.toFixed(1) } V</div>
                <div className="info-label">Net Power</div>
              </div>
          </div>
        </div>

    );
  }
}

StatusBar.defaultProps = {
  title: "page_title",
  speed: 0,
  batteryVoltage: 0,
  netPower: 0
};

export default StatusBar;