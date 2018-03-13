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
		'font-size' : '20px'
	},
	box1:{
		"border-top": "none",
		"border-bottom": ".5px solid #d3d3d3",
		height: "130px",
		"overflow": "hidden",
		"padding-left": "30px",
	},
	box2:{
		"border-bottom": ".5px solid #d3d3d3",
		height: "130px",
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
		overflow:"hidden",
	},
}
class primary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSpeed: (this.props.speed).toFixed(2),
			batteryVoltage: (this.props.batteryVoltage).toFixed(2)
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
	componentWillReceiveProps(nextProps) {
		this.setState({currentSpeed: (nextProps.speed).toFixed(2), batteryVoltage: (nextProps.batteryVoltage).toFixed(2)});  
	}
	render() {
		const{ currentSpeed, batteryVoltage,  units } = this.state;
		return  (
			<div style={styles.boxesContent} onClick={this.handleClick}>
				<div className="row">
						<div className="col-md-12" style={styles.box1}>
						<h3>Speed</h3>
						<h1>{currentSpeed}<span style={styles.units}>mph</span></h1>
					</div>
				</div>
				<div className="row">
						<div className="col-md-12" style={styles.box2}>
						<h3>Battery</h3>
						<h1>{batteryVoltage}<span style={styles.units}>volts</span></h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4"style={styles.box3}>
					<h4>sub-a</h4>
					<h2>12</h2>
					<h5>watts</h5>
					</div>
					<div className="col-md-4"style={styles.box3}>
					<h4>sub-b</h4>
					<h2>12</h2>
					<h5>watts</h5>

					</div>
					<div className="col-md-4"style={styles.box3}>
					<h4>sub-c</h4>
					<h2>12</h2>
					<h5>watts</h5>
					</div>
				</div>
			</div>
			);
	}
}
export default primary;