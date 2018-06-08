import React from 'react';
import Iframe from 'react-iframe'
import StatusBar from "../StatusBar/StatusBar";
import Menu from "../Menu/Menu";

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//weatherunderground for weather
			url: "https://www.wunderground.com/"
		}
	}
	render() {
		return  (
			<div>
				<StatusBar title="Weather"/>
				<Menu currentPath={this.props.location.pathname}/>
				<div className = "container-fluid">
					<Iframe url= {this.state.url} width="100%" height="100%" id="myId" className="myClassname" display="initial" position="absolute" allowFullScreen/>
				</div>
			</div>
			);
	}
}
export default Weather;