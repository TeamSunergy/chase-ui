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
import Graph from './widgets/Graph/Graph';
import Selector from './widgets/Selector';
import update from 'immutability-helper';
import socketIOClient from 'socket.io-client';
import battery from "../Battery/Battery";

import {graphs} from './widgets/Graph/graph-config';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGraph: 0,
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
    this.selectGraph = this.selectGraph.bind(this);
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
            netPower: {$set: data.netPower},
            batterySoc: {$set: data.soc},
          }
        }
      });
      this.setState(newState);
    });
  }

  selectGraph(graph) {
    console.log("selectGraph", graph);
    if (this.state.selected !== graph)
      this.setState({selectedGraph: graph});
  }

  //<Overview widgets={this.state.widgets} layout={this.state.layout}/>
  render() {
    // const { loading } = this.state;
    let {speed, batteryVoltage, netPower} = this.state.status;
    let {selectedGraph} = this.state;
    return (
        <div>
          <StatusBar title="Overview" speed={speed} batteryVoltage={batteryVoltage} netPower={netPower}/>
          <Menu currentPath={this.props.location.pathname}/>
          <div id="overview">
            <div className="content-wrapper">
              <div id="column-left">
                <Primary {...this.state.primary.props}/>
                <Secondary {...this.state.secondary.props}/>
              </div>
              <div id="column-right" className="graph">
                <div id="net-power-graph" className="widget sub">
                  {(selectedGraph === 0) ? <h2>Graph – Speed</h2> : <h2>Graph – SOC</h2>}
                  <Selector selected={selectedGraph} selectGraph={this.selectGraph}/>
                  <Graph selected={selectedGraph}
                         selectGraph={this.selectGraph}
                         graphSet={this.state.graphSet}
                         {...this.state.graph.props}/>
                </div>
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