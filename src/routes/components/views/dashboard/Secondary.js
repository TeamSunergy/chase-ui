import React from 'react';
const styles = {
	units: {
		'paddingLeft' : '1%',
		'fontSize' : '20px',
		'paddingRight' : '10%',
	},
	box1:{
		"paddingLeft": "30px",
		height: "10%",
	},
	box2:{
		"height": "10%",
		"paddingLeft": "30px",
	},
	boxesContent: {
		overflow:"hidden",
	}
	
}

class motorController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			motorControllerPower: (this.props.motorControllerPower).toFixed(2),
			auxiliaryBatteryVoltage:  (this.props.auxiliaryBatteryVoltage).toFixed(2),
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			motorControllerPower: (nextProps.motorControllerPower).toFixed(2), 
			auxiliaryBatteryVoltage: (nextProps.auxiliaryBatteryVoltage).toFixed(2),
		});}
	render() {
		const{ motorControllerPower, auxiliaryBatteryVoltage } = this.state;
		return  (
			<div style={styles.boxesContent}>
				<div className="row">
					<div className="col-md-12" style={styles.box1}>
						<h3>Motor Controller</h3>
						<h1>{ motorControllerPower }<span style={styles.units}>watts</span></h1>
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-12" style={styles.box2}>
						<h3>Aux. Battery</h3>
						<h1>{ auxiliaryBatteryVoltage }<span style={styles.units}>volts</span></h1>
					</div>
				</div>
			</div>
			);
	}
}
export default motorController;