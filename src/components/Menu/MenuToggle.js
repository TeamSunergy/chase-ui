/**
 * MenuToggle Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';

class MenuToggle extends Component {
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
    return (
        <div id="menu-toggle" onClick={this.handleClick}>
          <i className="material-icons mdi-menu">menu</i>
        </div>
    );
  }
}

MenuToggle.defaultProps = {
  handleToggle: () => {}
};

export default MenuToggle;