import React from 'react';
import Iframe from 'react-iframe'

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
			<Iframe url= {this.state.url} width="100%" height="100%" id="myId"
			className="myClassname" display="initial" position="absolute" allowFullScreen/>
			);
	}
}
export default Weather;