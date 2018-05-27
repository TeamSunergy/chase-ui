import React from 'react';
import { BrowserRouter, Route, Switch, browserHistory } from  'react-router-dom';
//components
import Overview from '../components/Overview/Overview';
import Battery from '../components/Battery/Battery';
import Motor from '../components/Motor/Motor';
import Analytics from '../components/Analytics/Analytics';
import Weather from '../components/Weather/Weather';
import Settings from '../components/Settings/Settings';
import Data from '../components/Data/Data';

export default ()=>(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Overview}/>
			<Route path="/battery" exact component={Battery}/>
			<Route path="/motor" exact component={Motor}/>
			<Route path="/analytics" exact component={Analytics}/>
			<Route path="/weather" exact component={Weather}/>
			<Route path="/settings" exact component={Settings}/>
			<Route path="/data" exact component={Data}/>
		</Switch>
	</BrowserRouter>
	);