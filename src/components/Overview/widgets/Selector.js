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
    this.state = {
      value: "_default"
    };
    this.setup = this.setup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected.name !== this.props.selected.name)
      this.setState({value: nextProps.selected.name});
  }

  setup() {
    let {options} = this.props;
    return options.map((o) =>
        <option value={o.key}>{o.string}</option>
    );
  }

  handleChange(event) {
    this.props.selectGraph(event.target.value);
  }

  render() {
    return (
        <div id="graph-selector">
          <select value={this.props.selected.name} onChange={this.handleChange}>
            {this.setup()}
          </select>
          <i className="material-icons">arrow_drop_down</i>
        </div>
    );
  }
}

Selector.defaultProps = {
  selected: {},
  selectGraph: () => {},
  options: []
};

export default Selector;