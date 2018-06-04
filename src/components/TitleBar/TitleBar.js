/**
 * TitleBar Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';

class TitleBar extends Component {
  render() {
    return (
        <div id="title-bar">{ this.props.pageTitle }</div>
    );
  }
}

TitleBar.defaultProps = {
  pageTitle: "page_title"
};

export default TitleBar;