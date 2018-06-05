/**
 * NotificationCenter Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';

class NotificationCenter extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      panelOpen: false
    };
  }
  render() {
    let {notificationNumber} = this.props;
    let {unreadNotifications} = this.props;
    let {priorityAlert} = this.props;
    let notificationStyle = "notification-circle";

    if (unreadNotifications) notificationStyle += " unread";
    return (
        <div id="notification-center">
          <div className={ notificationStyle }><i className="material-icons mdi-notification">
            notifications_none
          </i><div className="number-label">{ notificationNumber }</div></div>
        </div>
    );
  }
}

NotificationCenter.defaultProps = {
  notificationNumber: 24,
  unreadNotifications: false,
  priorityAlert: false
};

export default NotificationCenter;