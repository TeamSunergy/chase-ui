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
import {graphs} from "./widgets/Graph/graph-config";

import Primary from './widgets/Primary';
import Secondary from './widgets/Secondary';
import Graph from './widgets/Graph/Graph';
import Selector from './widgets/Selector';

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
          arrayTotalPower: 0,
          subAPower: 0,
          subBPower: 0,
          subCPower: 0,
        }
      },
      secondary: {
        props: {
          subACurrent: 0,
          subBCurrent: 0,
          subCCurrent: 0,
          subAVoltage: 0,
          subBVoltage: 0,
          subCVoltage: 0,
        },
      },
      graph:{
        props:{
        }
      }
    };
    this.selectGraph = this.selectGraph.bind(this);
    this.setupSelector = this.setupSelector.bind(this);
  }

  componentDidMount(){
    const socket = socketIOClient(this.state.endpoint);
    socket.on('data', (data) => {
      this.state.loading = false;
      console.log(data);
      const newState = update(this.state, {
        status: {
          speed :{$set: data.motConVehicleVelocity},
          batteryVoltage : {$set: data.batteryPackInstantaneousVoltage},
          netPower: {$set: data.netPower},
        },
        primary: {
          props:{
            arrayTotalPower: {$set: data.mpptTotalNetPower.toFixed(1)},
            subAPower: {$set: data.mppt0ArrayNetPower.toFixed(1)},
            subBPower: {$set: data.mppt1ArrayNetPower.toFixed(1)},
            subCPower: {$set: data.mppt2ArrayNetPower.toFixed(1)},
          }
        },
        secondary:{
          props: {
            subACurrent: {$set: data.mppt0ArrayCurrent.toFixed(1)},
            subBCurrent: {$set: data.mppt1ArrayCurrent.toFixed(1)},
            subCCurrent: {$set: data.mppt2ArrayCurrent.toFixed(1)},
            subAVoltage: {$set: data.mppt0ArrayVoltage.toFixed(1)},
            subBVoltage: {$set: data.mppt1ArrayVoltage.toFixed(1)},
            subCVoltage: {$set: data.mppt2ArrayVoltage.toFixed(1)},
          }
        },
        graph:{
          props: {
            arrayTotalPower: {$set: data.mpptTotalNetPower.toFixed(1)},
            subAPower: {$set: data.mppt0ArrayNetPower.toFixed(1)},
            subBPower: {$set: data.mppt1ArrayNetPower.toFixed(1)},
            subCPower: {$set: data.mppt2ArrayNetPower.toFixed(1)},
          }
        }
      });
      this.setState(newState);
    });
  }

  selectGraph(graph) {
    let g = this.state.graphSet[graph];
    if (this.state.selectedGraph !== g) {
      if (this.state.selectedGraph === '_default')
        document.getElementsByClassName("chart-container")[0].getElementsByTagName("div")[0].className = "hide";
      this.setState({selectedGraph: g});
    }
  }

  setupSelector(set) {
    let graphSet = set;
    let options = [];
    let i = 0;
    let str = "";
    for (let graph in graphSet) {
      if (graphSet.hasOwnProperty(graph)) {
        // Regex credits: James Khoury – https://stackoverflow.com/questions/7225407
        // Added code for first letter capitalization, and removal of preceding whitespace
        str = (graphSet[graph].name.charAt(0).toUpperCase() + graphSet[graph].name.slice(1))
            .replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2").trim();
        options[i] = {
          key: graphSet[graph].name,
          string: str
        };
        i++;
      }
    }
    return options;
  }

  render() {
    let {speed, batteryVoltage, netPower} = this.state.status;
    let {selectedGraph} = this.state;
    let {graphSet} = this.state;
    let options = this.setupSelector(graphSet);
    console.log(options);
    console.log(selectedGraph);

    // Set title of graph based on states
    let title;
    if (selectedGraph === "_default") title = options[0].string;
    else {
      for (let i = 0; i < options.length; i++) {
        if (options[i].key === selectedGraph.name)
          title = options[i].string;
      }
    }
    console.log(title);
    return (
        <div>
          <Menu currentPath={this.props.location.pathname}/>
          <StatusBar title="Array" speed={speed} batteryVoltage={batteryVoltage} netPower={netPower}/>
          <div id="array">
            <div className="content-wrapper">
              <div id="column-left">
                <Primary {...this.state.primary.props}/>
                <Secondary {...this.state.secondary.props}/>
              </div>
              <div id="column-right" className="graph">
                <div id="graph1" className="widget sub">
                  <div className="graph-info">
                    <h2>{title}</h2>
                    <Selector selected={selectedGraph} selectGraph={this.selectGraph} options={options}/>
                  </div>
                  <Graph selected={selectedGraph}
                         selectGraph={this.selectGraph}
                         graphSet={graphSet}
                         {...this.state.graph.props}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Array;