/**
 * MenuPanel Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';
import MenuToggle from "./MenuToggle";

class MenuPanel extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleToggle();
  }

  render() {
    let {isOpen, panelNodeRef} = this.props;
    return (
        <div id="menu-overlay" className={isOpen ? "show" : ""}>
          <div id="menu-panel" className={isOpen ? "show" : ""} ref={panelNodeRef}>
            <div id="menu-close-wrapper" onClick={this.handleClick}>
              <i className="material-icons mdi-menu-close">close</i>
            </div>
          </div>
        </div>

    );
  }
}

MenuToggle.defaultProps = {
  handleToggle: () => {},
  isOpen: false,
  panelNodeRef: undefined
};

export default MenuPanel;