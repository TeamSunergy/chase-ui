/**
 * NotificationCenter Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';
import NotificationPanel from './NotificationPanel';

class NotificationCenter extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      panelOpen: false,
      unreadCount: this.props.unreadCount
    };
    this.handleClick = this.handleClick.bind(this);
    this.openPanel = this.openPanel.bind(this);
  }

  handleClick() {
    let {panelOpen} = this.state;
    if (!panelOpen) this.openPanel();
    else this.setState({panelOpen: false});
  }

  openPanel() {
    this.setState({
      unreadCount: 0,
      panelOpen: true
    });
  }


  render() {
    /**
    document.addEventListener("click", function(event) {
      let isOpen = true;
      // If user clicks inside the element, do nothing
      if (event.target.closest("#notification-panel") && this.state.panelOpen) return;
      // If user clicks outside the element, hide it!
      else this.setState({panelOpen: false});
    });
     **/
    let {panelOpen} = this.state;
    let {unreadCount} = this.state;
    let notificationStyle = "notification-circle";

    if (unreadCount > 0) notificationStyle += " unread";
    return (
        <div>
          <div id="notification-center" onClick={this.handleClick}>
            <div className={ notificationStyle }><i className="material-icons mdi-notification">
              notifications_none</i>
              <div className="number-label">{ unreadCount }</div>
            </div>
          </div>
          {/** IF panel is toggled open, render it **/}
          {panelOpen ? <NotificationPanel />: <div />}
        </div>

    );
  }
}

NotificationCenter.defaultProps = {
  unreadCount: 5,
  unreadNotifications: false,
  priorityAlert: false
};

export default NotificationCenter;