import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LandingContainer, LoginContainer } from './containers' 

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact={true} path="/" component={LandingContainer} />
                        <Route path="/login" component={LoginContainer} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

/*
<Router>
    <div>
        <Switch>
            <Route exact={true} path="/" component={MainContainer} />
            <Route path="/landing" component={LandingContainer} />
            <Route path="/login" component={LoginContainer} />
        </Switch>
    </div>
</Router>
*/

export default App;
