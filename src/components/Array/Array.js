/**
 * Array Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';
import StatusBar from "../StatusBar/StatusBar";
import Menu from "../Menu/Menu";
import socketIOClient from "socket.io-client";
import update from "immutability-helper/index";
import {graphs} from "../Overview/widgets/Graph/graph-config";

class Array extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      selectedGraph: "_default",
      options: [],
      graphSet: graphs,
      loading: true,
      endpoint: "http://localhost:4001",
      status: {
        speed: 0,
        batteryVoltage: 0,
        netPower: 0
      },
      primary: {
        props:{
          speed: 0,
          batteryVoltage: 0,
          batterySoc: 0,
          arrayTotalPower: 0,
          arrayAPower: 0,
          arrayBPower: 0,
          arrayCPower: 0,
        }
      },
      secondary: {
        props: {
          motorControllerPower: 0,
          auxiliaryBatteryVoltage: 0,
        },
      },
      gauge: {
        props: {
          netPower: 0,
        },
      },
      graph:{
        props:{
        }
      }
    };
  };

  componentDidMount(){
    const socket = socketIOClient(this.state.endpoint);
    socket.on('data', (data) => {
      this.state.loading = false;
      const newState = update(this.state, {
        status: {
          speed :{$set: data.motConVehicleVelocity},
          batteryVoltage : {$set: data.batteryPackInstantaneousVoltage},
          netPower: {$set: data.netPower},
        },
        primary: {
          props:{
            arrayTotalPower: {$set: data.mpptTotalNetPower},
            arrayAPower : {$set: data.mppt0ArrayCurrent},
            arrayBPower : {$set: data.mppt1ArrayCurrent},
            arrayCPower : {$set: data.mppt2ArrayCurrent},
          }
        },
        secondary:{
          props: {
            motorControllerPower: {$set: data.motConBusCurrent},
          }
        },
        graph:{
          props: {
            netPower: {$set: data.netPower},
            batterySoc: {$set: data.soc},
            netPowerGauge: {$set: data.netPower}
          }
        }
      });
      this.setState(newState);
    });
  }

  render() {
    return (
        <div>
          <Menu currentPath={this.props.location.pathname}/>
          <StatusBar title="Battery"/>
          <h1>Array</h1>
          <div id="array">
            <div className="content-wrapper">
            </div>
          </div>
        </div>
    );
  }
}

export default Array;

/**
 <div className="sub">
 <h2>Array</h2>
 <div className="value">{arrayTotalPower}<span> watts</span></div>
 </div>
 <div className="sub cluster">
 <div className="sub-inline">
 <h3>sub-a</h3>
 <div className="value">{arrayAPower}</div><span>watts</span><div/>
 </div>
 <div className="sub-inline">
 <h3>sub-b</h3>
 <div className="value">{arrayBPower}</div><span>watts</span><div/>
 </div>
 <div className="sub-inline">
 <h3>sub-c</h3>
 <div className="value">{arrayCPower}</div><span>watts</span><div/>
 </div>
 */