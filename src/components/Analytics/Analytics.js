import React from 'react';
import StatusBar from "../StatusBar/StatusBar";
import Menu from "../Menu/Menu";

class Analytics extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return  (
				<div>
          <Menu currentPath={this.props.location.pathname}/>
          <StatusBar title="Analytics"/>
          <h1>Route Analytics</h1>
        </div>
			);
	}
}
export default Analytics;