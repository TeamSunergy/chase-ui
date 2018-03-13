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
class netCurrent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			netCurrent: (this.props.netCurrent).toFixed(2),
			units: 'A'
		}
	}
	render() {
		const{ netCurrent, units } = this.state;
		return  (
			<div style={styles.text}>
			<h1>{ netCurrent } <span style={ styles.units }>{ units }</span></h1>
			</div>
			);
	}
}
export default netCurrent;