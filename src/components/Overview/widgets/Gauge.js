import React from 'react';

import HorizontalGauge from './HorizontalGauge';

const styles = {
	netPower:{
		overflow:"scroll",
	},
	headingLeft:{
		"textAlign":"left",
		float:"left",
		margin: 0
	},
	headingRight:{
		"textAlign":"right",
		float:"right",
		margin: 0
	},
}
class auxBatteryVoltage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			netPower: (this.props.netPower).toFixed(2)
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			netPower: (nextProps.netPower).toFixed(2), 
		});}
		render() {
			const { netPower } = this.state;
			return(
				<div style={styles.netPower}>
				<h3>Net Power</h3>
				<span style = {styles.heading}>
				</span>
					<HorizontalGauge height={60} min={-100} max={100} value = {20}/>
				</div>)
		}
	}
	export default auxBatteryVoltage;