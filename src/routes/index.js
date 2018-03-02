import React from 'react';
import { BrowserRouter, Route, Switch, browserHistory } from  'react-router-dom';
import settings from './settings';
import Home from './Home';

export default ()=>(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home}/>
			<Route path="/settings"exact component={settings}/>
		</Switch>
	</BrowserRouter>


	);