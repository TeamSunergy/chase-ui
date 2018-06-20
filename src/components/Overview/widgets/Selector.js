/**
 * Selector Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';

class Selector extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {};
    this.select = this.select.bind(this);
  }

  select(option) {
    // 0 = Net Power
    // 1 = Other
    this.props.selectGraph(option);
  }

  render() {
    return (
        <div id="graph-filter">
          <button className="selected" onClick={()=>{this.select(0)}}>Net Power</button>
          <button onClick={()=>{this.select(1)}}>Other</button>
        </div>
    );
  }
}

Selector.defaultProps = {
  selectGraph: () => {},
};

export default Selector;