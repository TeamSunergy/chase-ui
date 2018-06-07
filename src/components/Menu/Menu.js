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
  }

  handleToggle() {
    if (this.state.isOpen) this.setState({isOpen: false});
    else this.setState({isOpen: true});
  }

  render() {
    return (
        <div id="menu">
          <MenuToggle handleToggle={this.handleToggle}/>
          <div>{this.state.isOpen ? "open" : "closed"}</div>
          <MenuPanel handleToggle={this.handleToggle} isOpen={this.state.isOpen}/>
        </div>
    );
  }
}

export default Menu;