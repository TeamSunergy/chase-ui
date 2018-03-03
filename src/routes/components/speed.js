import React from 'react';
const styles = {
	speed: {
		'text-align' : 'center',
		'-webkit-user-select': 'none',
		'-khtml-user-select': 'none',
		'-moz-user-select': 'none',
		'-o-user-select': 'none',
		'user-select': 'none',
	},
	units: {
		'font-size' : '20px'
	}
}
class speed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSpeed: 123,
			units: 'mph'
		}
	}
	handleClick = () => {
		console.log('Handle Speed Conversion');
		if(this.state.units === 'mph'){
			let calculatedSpeed = this.state.currentSpeed * 1.60934;
			return this.setState({units: 'kp/h', currentSpeed: calculatedSpeed.toFixed(2)});
		}
		else{
			let calculatedSpeed = this.state.currentSpeed / 1.60934;
			return this.setState({units: 'mph', currentSpeed: calculatedSpeed.toFixed(2)});
		}

	}
	render() {
		const{ currentSpeed, units } = this.state;
		return  (
			<div style={styles.speed} onClick={this.handleClick}>
			<h1>{ currentSpeed } <span style={ styles.units }>{ units }</span></h1>
			</div>
			);
	}
}
export default speed;