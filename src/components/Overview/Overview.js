/**
 * Overview Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import React, { Component } from 'react';
import TitleBar from '../TitleBar/TitleBar';
import Primary from './widgets/Primary';
import Secondary from './widgets/Secondary';
import Gauge from './widgets/Gauge';
import Graph from './widgets/Graph';
import update from 'immutability-helper';
import socketIOClient from 'socket.io-client';

const styles = {
  content: {
    "marginTop" : "15px",
  },
};

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      endpoint: "http://localhost:4001",
      primary: {
        props:{
          speed: 0,
          batteryVoltage:0,
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
            arrayAPower : {$set: data.arrayAPower},
            arrayBPower : {$set: data.arrayBPower},
            arrayCPower : {$set: data.arrayCPower},
          }
        },
        secondary:{
          props: {
            motorControllerPower: {$set: data.motorControllerPower},
            auxiliaryBatteryVoltage: {$set: data.auxiliaryBatteryVoltage},
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
          <TitleBar pageTitle="Overview"/>
          <div className = "container-fluid" style = {styles.content}>
            <div className="row">
              <div className="col-md-3">
                <Primary {...this.state.primary.props}/>
                <Secondary {...this.state.secondary.props}/>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className = "row">
                    <div className="col-md-12">
                      <Graph{...this.state.graph.props}/>
                    </div>
                    <div className = "row">
                      <div className="col-md-12">
                        <Gauge {...this.state.gauge.props}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Overview;