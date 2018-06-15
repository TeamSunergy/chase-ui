/**
 * Overview Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, { Component } from 'react';
import StatusBar from '../StatusBar/StatusBar';
import Menu from "../Menu/Menu";
import Primary from './widgets/Primary';
import Secondary from './widgets/Secondary';
import Gauge from './widgets/Gauge';
import Graph from './widgets/Graph';
import update from 'immutability-helper';
import socketIOClient from 'socket.io-client';
import battery from "../Battery/Battery";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      endpoint: "http://localhost:4001",
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
          speed:0,
        }
      }
    }
  };

  componentDidMount(){
    const socket = socketIOClient(this.state.endpoint);
    socket.on('data', (data) => {
      this.state.loading = false;
      const newState = update(this.state, {
        primary: {
          props:{
            speed :{$set: data.motConVehicleVelocity},
            batteryVoltage : {$set: data.batteryPackInstantaneousVoltage},
            batterySoc : {$set: data.soc},
            arrayTotalPower: {$set: data.mpptTotalNetPower},
            arrayAPower : {$set: data.mppt0ArrayCurrent},
            arrayBPower : {$set: data.mppt1ArrayCurrent},
            arrayCPower : {$set: data.mppt2ArrayCurrent},
          }
        },
        secondary:{
          props: {
            motorControllerPower: {$set: data.motConBusCurrent},
            auxiliaryBatteryVoltage: {/**$set: data.auxiliaryBatteryVoltage **/ $set: 0.00},
          }
        },
        gauge:{
          props: {
            netPower: {$set: data.netPower},
          }
        },
        graph:{
          props: {
            speed: {$set: data.speed},
          }
        }
      });
      this.setState(newState);
    });
  }

  //<Overview widgets={this.state.widgets} layout={this.state.layout}/>
  render() {
    // const { loading } = this.state;
    return (
        <div>
          <StatusBar title="Overview"/>
          <Menu currentPath={this.props.location.pathname}/>
          <div className = "container-fluid">
            <div className="row">
              <div className="col-md-3">
                <Primary {...this.state.primary.props}/>
                <Secondary {...this.state.secondary.props}/>
              </div>

              <div className="col-md-9">
                <Graph{...this.state.graph.props}/>
              </div>
                {/**
                <div className = "row">
                  <div className="col-md-12">
                    <Gauge {...this.state.gauge.props}/>
                  </div>
                </div>
                 **/}
            </div>
          </div>
        </div>
    );
  }
}

export default Overview;