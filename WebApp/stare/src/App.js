import './App.css';

import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import { api } from './environment';
import { routes } from './utils/navigation';


axios.defaults.baseURL = api;

function App() {

    return (
        <Router>
            <Navigation />

            <Switch>
                {
                    routes.map((route, index) => (
                        <Route key={`route_${index}`} path={`/${route.path}`}>
                            {React.createElement(route.component)}
                        </Route>
                    ))
                }
            </Switch>

        </Router>
    );
}

export default App;
