import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { LANDING, HOME, DASHBOARD, LOGIN, SIGNUP } from '../constants/routes';
import history from './history';
import Route from './Route';
import Landing from '../views/Landing';
import Home from '../views/Home';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Signup from '../views/Signup';

const Navigation = () => (
    <Router history={history}>  
        <Switch>
           
            <Route.Public
                exact
                path={LANDING}
                component={Landing}
            />
            <Route.Public
                exact
                path={SIGNUP}
                component={Signup}
            />
            <Route.Public
                exact
                path={LOGIN}
                component={Login}
            />
            <Route.Private
                exact
                path={HOME}
                component={Home}
            />
            <Route.Private
                exact
                path={DASHBOARD}
                component={Dashboard}
            />
        </Switch>
    </Router>
);

export default Navigation;