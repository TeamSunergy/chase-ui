/**
 * Overview Component
 *
 * // TODO: Write Desc
 *
 * @extends Component
 */

import Button from '@material-ui/core/Button';
import Graph from './widgets/Graph/Graph';
import Menu from "../Menu/Menu";
import Primary from './widgets/Primary';
import React, { Component } from 'react';
import Secondary from './widgets/Secondary';
import Selector from './widgets/Selector';
import socketIOClient from 'socket.io-client';
import StatusBar from '../StatusBar/StatusBar';
import update from 'immutability-helper';

import { graphs } from './widgets/Graph/graph-config';

class Overview extends Component {
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
        props: {
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
      graph: {
        props: {
        }
      }
    };
    this.selectGraph = this.selectGraph.bind(this);
    this.setupSelector = this.setupSelector.bind(this);
  };

  componentDidMount() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('data', (data) => {
      this.state.loading = false;
      const newState = update(this.state, {
        status: {
          speed: { $set: data.motConVehicleVelocity },
          batteryVoltage: { $set: data.batteryPackInstantaneousVoltage },
          netPower: { $set: data.netPower },
        },
        primary: {
          props: {
            speed: { $set: data.motConVehicleVelocity },
            batteryVoltage: { $set: data.batteryPackInstantaneousVoltage },
            batterySoc: { $set: data.soc },
            arrayTotalPower: { $set: data.mpptTotalNetPower },
            arrayAPower: { $set: data.mppt0ArrayCurrent },
            arrayBPower: { $set: data.mppt1ArrayCurrent },
            arrayCPower: { $set: data.mppt2ArrayCurrent },
          }
        },
        secondary: {
          props: {
            motorControllerPower: { $set: data.motConBusCurrent },
            auxiliaryBatteryVoltage: {/**$set: data.auxiliaryBatteryVoltage **/ $set: 0.00 },
          }
        },
        gauge: {
          props: {
            netPower: { $set: data.netPower },
          }
        },
        graph: {
          props: {
            speed: { $set: data.motConVehicleVelocity.toFixed(0) },
            packVoltage: { $set: data.batteryPackInstantaneousVoltage.toFixed(1) },
            netPower: { $set: data.netPower.toFixed(1) },
            netPowerGauge: { $set: data.netPower.toFixed(1) }
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
      this.setState({ selectedGraph: g });
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
  
  acceptMethods = (clearGraph) => {
    // Parent stores the method that the child passed
    this.clearGraph = clearGraph;
  };

  //<Overview widgets={this.state.widgets} layout={this.state.layout}/>
  render() {
    // const { loading } = this.state;
    let { speed, batteryVoltage, netPower } = this.state.status;
    let { selectedGraph } = this.state;
    let set1 = {
      packVoltage: this.state.graphSet.packVoltage,
      speed: this.state.graphSet.speed,
      netPower: this.state.graphSet.netPower,
    };
    let set2 = {
      netPowerGauge: this.state.graphSet.netPowerGauge
    };
    let options = this.setupSelector(set1);

    // Set title of graph based on states
    let title;
    if (selectedGraph === "_default") {
      title = options[0].string;
      this.state.selectedGraphKey = options[0].key;
    }
    else {
      for (let i = 0; i < options.length; i++) {
        if (options[i].key === selectedGraph.name) {
          title = options[i].string;
          this.state.selectedGraphKey = options[i].key;
        }
      }
    }
    return (
      <div>
        <StatusBar title="Overview" speed={speed} batteryVoltage={batteryVoltage} netPower={netPower} />
        <Menu currentPath={this.props.location.pathname} />
        <div id="overview">
          <div className="content-wrapper">
            <div id="column-left">
              <Primary {...this.state.primary.props} />
              <Secondary {...this.state.secondary.props} />
            </div>
            <div id="column-right" className="graph">
              <div id="graph1" className="widget sub">
                <div className="graph-info">
                  <h2>{title}</h2>
                  <Button id="clear-graph" variant="outlined" color="secondary" onClick={() => this.clearGraph(this.state.selectedGraphKey)}>Clear Graph</Button>
                <Selector selected={selectedGraph} selectGraph={this.selectGraph} options={options} />
              </div>
              <Graph selected={selectedGraph}
                selectGraph={this.selectGraph}
                graphSet={this.state.graphSet}
                 shareMethods={this.acceptMethods}
                {...this.state.graph.props}/>
            </div>
            <div id="graph2" className="widget sub">
              <div className="graph-info">
                <h2>Net Power Gauge</h2>
              </div>
              <Graph selected={set2.netPowerGauge}
                selectGraph={this.selectGraph}
                graphSet={set2}
                {...this.state.graph.props} />
            </div>
          </div>
        </div>
      </div>
        </div >
    );
  }
}

export default Overview;