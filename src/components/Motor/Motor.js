import React from 'react';
import StatusBar from "../StatusBar/StatusBar";

class motor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return  (
        <div>
          <StatusBar title="Motor"/>
          <h1>Motor</h1>
        </div>
			);
	}
}
export default motor;