import React from 'react';
import { BrowserRouter, Route, Switch, browserHistory } from  'react-router-dom';

import dashboard from './components/views/dashboard';
import battery from './components/views/battery';
import motor from './components/views/motor';
import smartroute from './components/views/smartroute';
import weather from './components/views/weather';
import settings from './components/views/settings';

export default ()=>(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={dashboard}/>
			<Route path="/battery" exact component={battery}/>
			<Route path="/motor" exact component={motor}/>
			<Route path="/smartroute" exact component={smartroute}/>
			<Route path="/weather" exact component={weather}/>
			<Route path="/settings" exact component={settings}/>
		</Switch>
	</BrowserRouter>


	);