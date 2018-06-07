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
    let {isOpen} = this.props;
    return (
        <div id="menu-panel" className={isOpen ? "show" : ""}>
          <div id="menu-close-wrapper" onClick={this.handleClick}>
            <div className="menu-close-text">Close</div>
            <i className="material-icons mdi-menu-close">close</i>
          </div>
        </div>

    );
  }
}

MenuToggle.defaultProps = {
  handleToggle: () => {},
  isOpen: false
};

export default MenuPanel;