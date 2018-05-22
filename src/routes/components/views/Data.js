import ReactJson from 'react-json-view';
import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
const styles = {
	json: {
		"marginTop" : "15px"
	}
}
export default class Data extends Component {
	constructor(props){
		super(props);
		this.state = {
			endpoint: "http://localhost:4001",
			theme: "google"
		}
	}
	componentDidMount(){
		const socket = socketIOClient(this.state.endpoint);
		socket.on('data', (data) => {
			console.log('re');
			this.setState({"object":data});
		});
	}
	render() {
		const { theme } = this.state;
		return (
			<div className="container-fluid" style={styles.json}>
				<ReactJson src={this.state.object} theme={theme} />
			</div>
			);  
	}
}