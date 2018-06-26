/**
 * NotificationCenter Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, { Component } from 'react';
import NotificationPanel from './NotificationPanel'
import socketIOClient from 'socket.io-client';;

class NotificationCenter extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      panelOpen: false,
      unreadCount: this.props.unreadCount,
      notifications: this.props.notifications,
      unreadNotifications: this.props.unreadNotifications,
      endpoint: "http://localhost:4001"
    };

    this.panelNode = null;
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.openPanel = this.openPanel.bind(this);
  }

  handleClick() {
    let { panelOpen } = this.state;

    if (!panelOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    if (!panelOpen) this.openPanel();
    else this.setState({ panelOpen: false });
  }

  handleOutsideClick(e) {
    // If panelNode is a defined reference
    if (this.panelNode) {
      // ignore clicks on the component itself
      if (this.panelNode.contains(e.target)) {
        return;
      }

      this.handleClick();
    }
  }
  componentWillMount() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('notification', (notification) => {
      let notifications = this.state.notifications.slice(); //creates the clone of the state
      notifications.push(notification);
      let unread = this.state.unreadCount + 1;
      this.setState({ notifications: notifications, unreadCount: unread, unreadNotifications: true});
    });
  }

  openPanel() {
    this.setState({
      unreadCount: 0,
      panelOpen: true,
      unreadNotifications: false
    });
  }

  render() {
    let { panelOpen } = this.state;
    let { unreadCount } = this.state;
    let notificationStyle = "notification-circle";

    if (unreadCount > 0) notificationStyle += " unread";
    return (
      <div>
        <div id="notification-center" onClick={this.handleClick}>
          <div className={notificationStyle}><i className="material-icons mdi-notification">
            notifications_none</i>
            <div className="number-label">{unreadCount}</div>
          </div>
        </div>
        {/** IF panel is toggled open, render it **/}
        {panelOpen ? <NotificationPanel panelNodeRef={el => this.panelNode = el} notifications={this.state.notifications} /> : <div />}
      </div>

    );
  }
}

NotificationCenter.defaultProps = {
  unreadCount: 0,
  unreadNotifications: false,
  priorityAlert: false,
  notifications: []

};

export default NotificationCenter;