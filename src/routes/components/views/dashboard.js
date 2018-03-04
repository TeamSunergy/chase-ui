import React, { Component } from 'react';
import Dashboard from 'react-dazzle';
import speed from '../speed';
import batteryVoltage from '../batteryVoltage'
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
          props: {
            speed: 1,
          }
        },
          batteryVoltage: {
          type: batteryVoltage,
          title: 'Battery Voltage',
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
            widgets: [{key: 'speed'}],
          },{
            className: 'col-md-3',
            widgets: [{key: 'speed'}],
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