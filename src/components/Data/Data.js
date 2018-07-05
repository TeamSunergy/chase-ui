import ReactJson from 'react-json-view';
import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import StatusBar from "../StatusBar/StatusBar";
import Menu from "../Menu/Menu";
import update from "immutability-helper/index";
import Array from "../Array/Array";
const styles = {
	json: {
		"marginTop" : "15px"
	}
};
class Data extends Component {
	constructor(props){
		super(props);
		this.state = {
			endpoint: "http://localhost:4001",
			theme: "google",
      object: undefined,
		}
	}
	componentDidMount(){
		const socket = socketIOClient(this.state.endpoint);
		socket.on('data', (data) => {
			console.log('re');
      this.setState({"object": data})
		});
	}
	render() {
		const { theme } = this.state;
		return (
        <div>
					<Menu currentPath={this.props.location.pathname}/>
          <StatusBar title="Data"/>
          <div className="container-fluid" style={styles.json}>
            <ReactJson src={this.state.object} theme={theme} />
          </div>
        </div>
			);  
	}
}

export default Data;