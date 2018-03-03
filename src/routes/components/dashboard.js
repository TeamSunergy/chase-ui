import React, { Component } from 'react';
import Dashboard from 'react-dazzle';
import home from './home';
import speed from './speed';
import batteryVoltage from './batteryVoltage'
// Default styles.
import 'react-dazzle/lib/style/style.css';

export default class dashboard extends Component {
  constructor(props) {
  	super(props);
    this.state = {      
      widgets: {
        speed: {
          type: speed,
          title: 'Speed',
        },
          batteryVoltage: {
          type: batteryVoltage,
          title: 'Battery Voltage',
        }
        ,
          WordCounter: {
          type: home,
          title: 'Counter widget',
        }
      },
      layout: {
        rows: [{
          columns: [{
            className: 'col-md-2',
            widgets: [{key: 'speed'}],
          },{
            className: 'col-md-3',
            widgets: [{key: 'batteryVoltage'}],
          },
          ],
        },
        {
          columns: [{
            className: 'col-md-3',
            widgets: [{key: 'WordCounter'}],
          },{
            className: 'col-md-3',
            widgets: [{key: 'WordCounter'}],
          },
          ],
        }],
      }
    };
  }

  render() {
    return <Dashboard  widgets={this.state.widgets} layout={this.state.layout}  />
  }
}