/**
 * NotificationPanel Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NotificationPanel extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {};
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // TODO: render notifications dynamically

  }

  render() {
    return (
        <div id="notification-panel">
          <div className="panel-arrow" />
          <ul>
            <li><Link to="/battery">Battery: Notification_0 this one is a little longer.</Link></li>
            <li><Link to="/analytics">Analytics: Notification_1.</Link></li>
            <li><Link to="/data">Data: Notification_2 this one is also a little longer.</Link></li>
            <li><Link to="/motor">Motor: Notification_3 this one is short.</Link></li>
            <li><Link to="/">Overview: Notification_4 back to home!</Link></li>
          </ul>
          <a className="see-all" href="#">All notifications</a>
        </div>
    );
  }
}

export default NotificationPanel;