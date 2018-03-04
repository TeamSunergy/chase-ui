import React from 'react';
import Iframe from 'react-iframe'

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "https://forecast.weather.gov/MapClick.php?lat=36.220480000000066&lon=-81.68718999999999#.WpxY5BPwbX8"
		}
	}
	render() {
		return  (
			<Iframe url= {this.state.url}
        width="97.5%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="absolute"
        allowFullScreen/>
			);
	}
}
export default Weather;