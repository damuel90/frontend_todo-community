import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useStore from '../customHooks/useStore';
import { LANDING, HOME  } from '../constants/routes';

const Public = ({ component: Component }) => {
	const [{ user: { isAuthenticated } }] = useStore();
	return(
		<Route 
			component = {props => !isAuthenticated ? <Component {...props} /> : <Redirect to={HOME} />}
		/>
	)
};

const Private = ({ component: Component }) => {
	const [{ user: { isAuthenticated } }] = useStore();
	return(
		<Route 
			component = {props => isAuthenticated ? <Component {...props} /> : <Redirect to={LANDING} />}
		/>
	)
};

export default {
    Public,
    Private
};