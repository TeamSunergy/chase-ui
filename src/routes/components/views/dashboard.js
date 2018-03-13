import React, { Component } from 'react';
import Dashboard from 'react-dazzle';
import primary from './dashboard/primary';
import batteryVoltage from './dashboard/batteryVoltage';
import totalArrayPower from './dashboard/totalArrayPower';
import netPower from './dashboard/netPower';
import netCurrent from './dashboard/netCurrent';
import secondary from './dashboard/secondary';
import auxBatteryVoltage from './dashboard/auxBatteryVoltage';
// Default styles.
import 'react-dazzle/lib/style/style.css';
import update from 'immutability-helper';
import socketIOClient from 'socket.io-client'

const styles = {
  nav: {
    "background-color": "rgb(22,25,28)",
    "border-radius": "0px",
    "color" : "white",
    "padding-left" : "10px",
    "margin-bottom" : "10px",
  },
  content: {
      "margin-left" : "10px",
      "marigin-right" : "232px"
    }
}

export default class dashboard extends Component {
  constructor(props) {
  	super(props);
    this.state = {    
      endpoint: "http://localhost:4001",
      widgets: {
        primary: {
          type: primary,
          props: {
            speed: 1,
            batteryVoltage:2,
          }
        },
        batteryVoltage: {
          type: batteryVoltage,
          props: {
            batteryVoltage: 2,
          },
        },
        totalArrayPower: {
          type: totalArrayPower,
          props: {
            totalArrayPower:3,
          },
        },
        netPower: {
          type: netPower,
          props: {
            netPower: 4,
          },
        },

        netCurrent: {
          type: netCurrent,
          props: {
            netCurrent: 5,
          },
        },
        secondary: {
          type: secondary,
          props: {
            motorControllerCurrent: 6,
            motorControllerVoltage: 7,
          },
        },
        auxBatteryVoltage: {
          type: auxBatteryVoltage,
          props: {
            auxBatteryVoltage: 8,
          },
        }
      },
      layout: {
        rows: [{
          columns: [
          {
            className: 'col-md-3',
            widgets: [{key: 'primary'}],
          },
          {
            className: 'col-md-8',
            widgets: [{key: 'batteryVoltage'}],
          },
          ],
        },
        {
          columns: [
          {
            className: 'col-md-3',
            widgets: [{key: 'secondary'}],
          },
          {
            className: 'col-md-9',
            widgets: [{key: 'auxBatteryVoltage'},{key: 'auxBatteryVoltage'}],
          },
          ],
        }],
      }
    };
  }

  componentDidMount(){
    const socket = socketIOClient(this.state.endpoint);
    console.log('re');
    socket.on('data', (data) => {
      console.log(data.time);
      console.log(data.battery);

      const newState = update(this.state, {
        widgets: {
          primary: {
              props: {
                  speed :{$set: data.speed},
                  batteryVoltage : {$set: data.battery}
                }
       }
     }
   });
      this.setState(newState);
    });
  }
  render() {

    return (
      <div>
        <div style={styles.content}>
        <Dashboard widgets={this.state.widgets} layout={this.state.layout}/>
        </div>
      </div>
      );  
  }
}