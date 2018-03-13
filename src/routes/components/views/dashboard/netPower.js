import React from 'react';
const styles = {
	text: {
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
class netPower extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			netPower: (this.props.netPower).toFixed(2),
			units: 'W'
		}
	}
	render() {
		const{ netPower, units } = this.state;
		return  (
			<div style={styles.text}>
			<h1>{ netPower } <span style={ styles.units }>{ units }</span></h1>
			</div>
			);
	}
}
export default netPower;