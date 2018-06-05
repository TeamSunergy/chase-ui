/**
 * TitleBar Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';

class StatusBar extends Component {
  render() {
    return (
        <div id="status-bar">
          <div id="status-title"><h1>{ this.props.title }</h1></div>
          <div id="status-info">
            <ul>
              <li className="info-item"><div className="data">{ this.props.speed }</div>
                <div className="info-label">Speed</div></li>
              <li className="info-item"><div className="data">{ this.props.speed }</div>
                <div className="info-label">Batt. Volt.</div></li>
              <li className="info-item"><div className="data">{ this.props.speed }</div>
                <div className="info-label">Net Power</div></li>
            </ul>
          </div>
        </div>

    );
  }
}

StatusBar.defaultProps = {
  title: "page_title",
  speed: 0
};

export default StatusBar;