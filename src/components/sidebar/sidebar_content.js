import React from 'react';
import MaterialTitlePanel from './material_title_panel';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import logo from '../../resources/logo.png';
const styles = {
  sidebar: {
    width: 265,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: 'white',
    textDecoration: 'none',
    'fontSize': '16px',
  }, settings: {
    position:"absolute",
    bottom:20,
    padding: '16px 0px',
    color: 'white',
    textDecoration: 'none',
    'fontSize': '16px',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'rgb(22,25,28)',
  },
  icon: {
  'verticalAlign': 'middle',
  'paddingRight': '10px',
  height: '25px',
  width: '25px',
  'boxSizing': 'content-box !important'
},
image: {
    "textAlign": "center",
},
};

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;
  const links = [];
    //links.push(<a key={1}  href="/home" style={styles.sidebarLink}><Icon.Home style={styles.icon}/><span>Home</span></a>);
    links.push(<a key={2}  href="/battery" style={styles.sidebarLink}><Icon.Battery style={styles.icon}/><span>Battery</span></a>);
    links.push(<a key={4} href="/motor" style={styles.sidebarLink}><Icon.Truck style={styles.icon}/><span>Motor Controller</span></a>);
    links.push(<a key={5} href="/analytics" style={styles.sidebarLink}><Icon.Navigation style={styles.icon}/><span>Analytics</span></a>);
    links.push(<a key={6} href="/weather" style={styles.sidebarLink}><Icon.Sun style={styles.icon}/><span>Weather</span></a>);
    links.push(<a key={7}  href="/data" style={styles.sidebarLink}><Icon.Info style={styles.icon}/><span>Data</span></a>);
    links.push(<a key={7}  href="/settings" style={styles.settings}><Icon.Settings style={styles.icon}/><span>Settings</span></a>);


  return (
    <MaterialTitlePanel title="" style={style}>
      <div style={styles.content}>
      <p style={styles.image}>
      <a href="/"><img href="/" src={logo}width="75%" style={style.image}></img></a>
      </p>        
      <a href="/" style={styles.sidebarLink}><Icon.Activity style={styles.icon}/>Overview</a>
        <div style={styles.divider} />
        {links}

      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
