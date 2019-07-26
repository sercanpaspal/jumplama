import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route, Switch } from 'react-router-dom';
import './index.css';

import App from './components/App';

ReactDOM.render((
    <Router>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>
), document.getElementById('root'));