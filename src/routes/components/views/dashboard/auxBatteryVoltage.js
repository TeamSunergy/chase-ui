import React from 'react';

import HorizontalGauge from 'react-horizontal-gauge';

const styles = {
	auxBatteryVoltage: {
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
class auxBatteryVoltage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			auxBatteryVoltage: (this.props.auxBatteryVoltage).toFixed(2),
			units: 'V'
		}
	}
	render() {

              const gaugeTicks = [{label: '0', value: 0}, {label: '50', value: 50}, {label: '100', value: 100}];
		const{ auxBatteryVoltage, units } = this.state;
		return  (
			<div style={styles.auxBatteryVoltage} onClick={this.handleClick}>

        <HorizontalGauge ticks={gaugeTicks} height={70} width={1000} min={0} max={100} value={7.3}/>
			</div>
			);
	}
}
export default auxBatteryVoltage;