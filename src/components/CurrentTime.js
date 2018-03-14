import React from 'react';
import Time from 'react-time';

class CurrentTime extends React.Component{
	constructor(){
		super();
		this.state = {
			time : new Date(),
			interval: 1000
		}
	}  
	componentDidMount() {
		const { interval } = this.state;
		setInterval(
			() => {
				this.setState({
					time: new Date()
				})
			}
			,interval)
	}
	render() {
		const { time } = this.state;    
		const { className } = this.props;
		return (
			<Time value={time} className = {className} format="hh:mm:ss A"></Time>
			)
	}
}
export default CurrentTime;
