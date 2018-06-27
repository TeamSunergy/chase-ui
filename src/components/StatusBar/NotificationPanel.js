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
    this.state = {
      notifications: [],
      numberOfNotifications: 5
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // TODO: render notifications dynamically
  }
  render() {
    const { numberOfNotifications } = this.state
    const { notifications } = this.props
    let link;
    if(notifications.length === 0){
      link = <li><Link to="#"> No notifcations</Link></li>
    }
    else{
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