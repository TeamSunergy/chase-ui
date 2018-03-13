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
		'padding-left' : '5px',
		'padding-right': '40px',
		'font-size' : '20px'
	},
	box1:{
		"border-top": "none",
		"border-bottom": ".5px solid #d3d3d3",
		height: "100px",
		"padding-left": "30px",

	},
	box2:{
		"border-bottom": "none",
		height: "100px",
		"padding-left": "30px",
	},
	box3:{
		"border-right": ".1px solid #d3d3d3",
		"border-left": "none",
		"border-bottom": "none",
		height: "130px",
		"text-align": "center",
	},
	boxesContent: {
		overflow: "hidden"
	},
	content: {
		"padding-left": "50px",
		"padding-right": "10px"
	}
}
class motorController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: (this.props.motorControllerCurrent).toFixed(2),
			units: 'V',
			voltage: (this.props.motorControllerVoltage).toFixed(2),
		}
	}
	render() {
		const{ current, voltage, units } = this.state;
		return  (
			<div>
			<div className="row" style={styles.boxesContent}>
				<div className="col-md-12" style={styles.box1}>
				<h4>Motor Controller</h4>
				<h1>121<span style={styles.units}>volts</span>34<span style={styles.units}>amps</span></h1>
				</div>
			</div>
			<div className="row">
			<div className="col-md-12" style={styles.box2}>
							<h4>Aux. Battery</h4>
				<h1>123<span style={styles.units}>volts</span></h1>
				</div>

			</div>
			</div>
			);
	}
}
export default motorController;