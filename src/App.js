import React from 'react';
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './components/sidebar/material_title_panel';
import SidebarContent from './components/sidebar/sidebar_content'; //npm install react-sidebar - - github.com/balloob/react-sidebar
import { Route, Switch } from  'react-router-dom';
import * as Icon from 'react-feather';
import Weather from "./components/Weather/Weather";
import Data from "./components/Data/Data";
import Overview from "./components/Overview/Overview";
import Battery from "./components/Battery/Battery";
import Analytics from "./components/Analytics/Analytics";
import Settings from "./components/Settings/Settings";
import Motor from "./components/Motor/Motor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
    };
    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  }

  render() {
    const sidebar = <SidebarContent />;
    const contentHeader = (
      <span>
        {!this.state.docked &&
         <a onClick={this.menuButtonClick} href="#" className = "contentHeaderMenuLink"><Icon.Menu className="styles.icon"/></a>}
         <span className= "para">
         Team Sunergy
         </span>
       </span>
       );

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen,
    };

    return (
      <div className = "root">
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div className = "content">
            <Switch>
              <Route path="/" exact component={Overview}/>
              <Route path="/battery" exact component={Battery}/>
              <Route path="/motor" exact component={Motor}/>
              <Route path="/analytics" exact component={Analytics}/>
              <Route path="/weather" exact component={Weather}/>
              <Route path="/settings" exact component={Settings}/>
              <Route path="/data" exact component={Data}/>
            </Switch>
          </div>
        </MaterialTitlePanel>
      </Sidebar>
      </div>
      );
  }
}
export default App;
