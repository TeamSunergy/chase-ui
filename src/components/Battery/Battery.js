import React from 'react';
import StatusBar from "../StatusBar/StatusBar";

class battery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return  (
        <div>
          <StatusBar title="Battery"/>
          <h1>Battery</h1>
        </div>
			);
	}
}
export default battery;