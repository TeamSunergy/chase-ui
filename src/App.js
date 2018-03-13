import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './components/sidebar/material_title_panel';
import SidebarContent from './components/sidebar/sidebar_content'; //npm install react-sidebar - - github.com/balloob/react-sidebar
import Routes from './routes';
import * as Icon from 'react-feather';
import CurrentTime from './components/CurrentTime';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 0,
  },
  content: {
    padding: '0px',
    "overflow-x" : "hidden",
  },
  time:{
    'float':'right',
  },
  para:{
    'text-align':'left',
  },
  icon:{
  'vertical-align': 'middle',
  'padding-right': '10px',
  height: '30px',
  width: '30px',
  'box-sizing': 'content-box !important'
}
};

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
         <a onClick={this.menuButtonClick} href="#" style={styles.contentHeaderMenuLink}><Icon.Menu style={styles.icon}/></a>}
         <span style={styles.para}>
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
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
            <Routes />
          </div>
        </MaterialTitlePanel>
      </Sidebar>
      );
  }
}
export default App;