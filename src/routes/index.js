import React from 'react';
import { BrowserRouter, Route, Switch, browserHistory } from  'react-router-dom';
import settings from './components/settings';
import dashboard from './components/dashboard';
import weather from './components/weather';
import home from './components/home';
import battery from './components/battery';

export default ()=>(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={dashboard}/>
			<Route path="/settings" exact component={settings}/>
			<Route path="/weather" exact component={weather}/>
			<Route path="/home" exact component={home}/>
			<Route path="/battery" exact component={battery}/>
		</Switch>
	</BrowserRouter>


	);