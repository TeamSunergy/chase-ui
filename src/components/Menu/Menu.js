/**
 * Menu Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';
import MenuToggle from "./MenuToggle";
import MenuPanel from "./MenuPanel";

class Menu extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleToggle() {
    let {isOpen} = this.state;

    if (!isOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    if (this.state.isOpen) this.setState({isOpen: false});
    else this.setState({isOpen: true});
  }

  handleOutsideClick(e) {
    // If panelNode is a defined reference
    if (this.panelNode) {
      // ignore clicks on the component itself
      if (this.panelNode.contains(e.target)) {
        return;
      }

      this.handleToggle();
    }
  }

  render() {
    return (
        <div id="menu">
          <MenuToggle handleToggle={this.handleToggle}/>
          <div>{this.state.isOpen ? "open" : "closed"}</div>
          <MenuPanel handleToggle={this.handleToggle} isOpen={this.state.isOpen} panelNodeRef={el => this.panelNode = el}/>
        </div>
    );
  }
}

export default Menu;