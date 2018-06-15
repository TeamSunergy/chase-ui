import React, {Component} from 'react';
import { Route, Switch } from  'react-router-dom';
import Weather from "../Weather/Weather";
import Data from "../Data/Data";
import Overview from "../Overview/Overview";
import Battery from "../Battery/Battery";
import Analytics from "../Analytics/Analytics";
import Settings from "../Settings/Settings";
import Motor from "../Motor/Motor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
    };
    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  }

  render() {
    return (
      <div className="root">
        <div className="view">
          <Switch>
            <Route path="/" exact component={Overview}/>
            <Route path="/battery" exact component={Battery}/>
            <Route path="/motor" exact component={Motor}/>
            <Route path="/analytics" exact component={Analytics}/>
            <Route path="/weather" exact component={Weather}/>
            <Route path="/settings" exact component={Settings}/>
            <Route path="/data" exact component={Data}/>
          </Switch>
        </div>
      </div>
      );
  }
}
export default App;
