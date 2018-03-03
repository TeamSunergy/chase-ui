import React from 'react';
const styles = {
	voltage: {
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
class batteryVoltage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentVoltage: 12,
			units: 'V'
		}
	}
	render() {
		const{ currentVoltage, units } = this.state;
		return  (
			<div style={styles.voltage}>
			<h1>{ currentVoltage } <span style={ styles.units }>{ units }</span></h1>
			</div>
			);
	}
}
export default batteryVoltage;