import React from 'react';
import { BrowserRouter, Route, Switch, browserHistory } from  'react-router-dom';
//components
import Overview from '../components/Overview/Overview';
import Battery from './components/views/Battery';
import Motor from './components/views/Motor';
import Analytics from './components/views/Analytics';
import Weather from './components/views/Weather';
import Settings from './components/views/Settings';
import Data from './components/views/Data';

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