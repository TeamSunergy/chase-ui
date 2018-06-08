import React from 'react';
import StatusBar from "../StatusBar/StatusBar";
import Menu from "../Menu/Menu";

class motor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return  (
        <div>
          <Menu currentPath={this.props.location.pathname}/>
          <StatusBar title="Motor"/>
          <h1>Motor</h1>
        </div>
			);
	}
}
export default motor;