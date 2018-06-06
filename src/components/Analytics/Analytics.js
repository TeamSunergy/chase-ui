import React from 'react';
import StatusBar from "../StatusBar/StatusBar";

class smartroute extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return  (
				<div>
          <StatusBar title="Analytics"/>
          <h1>Route Analytics</h1>
        </div>
			);
	}
}
export default smartroute;