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
class totalArrayPower extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalArrayPower: (this.props.totalArrayPower).toFixed(2),
			units: 'V'
		}
	}
	render() {
		const{ totalArrayPower, units } = this.state;
		return  (
			<div style={styles.text}>
			<h1>{ totalArrayPower } <span style={ styles.units }>{ units }</span></h1>
			</div>
			);
	}
}
export default totalArrayPower;