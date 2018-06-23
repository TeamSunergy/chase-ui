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
    this.select = this.select.bind(this);
    this.setup = this.setup.bind(this);

    //this.setup();
  }

  select(option) {
    this.props.selectGraph(option);
  }

  setup() {
    let {options} = this.props;
    return options.map((o) =>
        <button onClick={()=>{this.select(o)}}>{o.string}</button>
    );
  }

  render() {
    return (
        <div id="graph-filter">
          {this.setup()}
        </div>
    );
  }
}

Selector.defaultProps = {
  selectGraph: () => {},
  options: []
};

export default Selector;