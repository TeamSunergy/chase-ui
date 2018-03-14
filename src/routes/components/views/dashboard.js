import React, { Component } from 'react';
import Dashboard from 'react-dazzle';
import primary from './dashboard/Primary';
import secondary from './dashboard/Secondary';
import auxBatteryVoltage from './dashboard/AuxBatteryVoltage';
import 'react-dazzle/lib/style/style.css';
import update from 'immutability-helper';
import socketIOClient from 'socket.io-client'

const styles = {
  content: {
    "padding" : "20px"
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