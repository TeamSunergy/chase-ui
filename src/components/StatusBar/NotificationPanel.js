/**
 * NotificationPanel Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import update from 'immutability-helper';

class NotificationPanel extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:4001",
      notifications: [],
      numberOfNotifications: 5
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('wer')
  }
  componentWillMount() {

    const socket = socketIOClient(this.state.endpoint);
    socket.on('notification', (notification) => {
      let notifications = this.state.notifications.slice(); //creates the clone of the state
      notifications.push(notification);
      this.setState({ notifications: notifications });
    });
  }
  com

  render() {
    const { notifications, numberOfNotifications } = this.state;
    let link;
    if (notifications.length == 0) {
      link = <li><Link to="#">No notifications</Link></li>
    }
    else {
      console.log(notifications);
      link = notifications.slice(numberOfNotifications * -1).map((notification) =>
        <li><Link to={notification.link}>{notification.message}</Link></li>
      )
    }
    return (
      <div id="notification-panel" ref={this.props.panelNodeRef}>
        <div className="panel-arrow" />
        <ul>
          { link }
        </ul>
        <a className="see-all" href="#">All notifications</a>
      </div>
    );
  }
}

NotificationPanel.defaultProps = {
  panelNodeRef: undefined
};

export default NotificationPanel;