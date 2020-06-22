import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LANDING, HOME, DASHBOARD, LOGIN, SIGNUP, FORGOTPASSWORD } from '../constants/routes';
import Header from '../components/Header';
import Route from './Route';
import Landing from '../views/Landing';
import Home from '../views/Home';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Signup from '../views/Signup';
import ForgotPassword from '../views/ForgotPassword';

const Navigation = () => (
    <Router> 
        <Header />
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
            <Route.Public
                exact
                path={FORGOTPASSWORD}
                component={ForgotPassword}
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