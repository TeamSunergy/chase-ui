/**
 * MenuPanel Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';
import MenuToggle from "./MenuToggle";
import {Link} from "react-router-dom";

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
    let path = this.props.currentPath.slice(1);
    return (
        <div id="menu-overlay" className={isOpen ? "show" : ""}>
          <div id="menu-panel" className={isOpen ? "show" : ""} ref={panelNodeRef}>
            <div id="title">APPTEL</div>
            <div id="menu-close-wrapper" onClick={this.handleClick}>
              <i className="material-icons mdi-menu-close">chevron_left</i>
            </div>
            <ul id="page-links">
              <li className={(path === "") ? "selected" : ""}>
                <Link to={"/"}>
                  <i className="material-icons">vertical_split</i>
                  Overview</Link></li>
              <li className={(path === "array") ? "selected" : ""}>
                <Link to={"/array"}>
                  <i className="material-icons">grid_on</i>
                  Array</Link></li>
              <li className={(path === "battery") ? "selected" : ""}>
                <Link to={"/battery"}>
                  <i className="material-icons">battery_std</i>
                  Battery</Link></li>
              <li className={(path === "motor") ? "selected" : ""}>
                <Link to={"/motor"}>
                  <i className="material-icons">tune</i>
                  Motor</Link></li>
              <li className={(path === "analytics") ? "selected" : ""}>
                <Link to={"/analytics"}>
                  <i className="material-icons">insert_chart</i>
                  Analytics</Link></li>
              <li className={(path === "data") ? "selected" : ""}>
                <Link to={"/data"}>
                  <i className="material-icons">bubble_chart</i>
                  Data</Link></li>
              <li className={(path === "weather") ? "selected" : ""}>
                <Link to={"/weather"}>
                  <i className="material-icons">cloud</i>
                  Weather</Link></li>
            </ul>
            <div id="logo-wrapper">
              <img id="logo" src={window.location.origin + '/images/team-sunergy-logo-light.png'}/>
            </div>
          </div>
        </div>

    );
  }
}

MenuToggle.defaultProps = {
  handleToggle: () => {},
  isOpen: false,
  panelNodeRef: undefined,
  currentPath: undefined
};

export default MenuPanel;