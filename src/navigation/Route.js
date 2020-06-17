import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from '../context';
import { LANDING, DASHBOARD  } from '../constants/routes';

const Public = ({ component: Component }) => {
	const { userState: { isAuthenticated } } = useContext(Context)
	return(
		<Route 
			component = {props => !isAuthenticated ? <Component {...props} /> : <Redirect to={DASHBOARD} />}
		/>
	)
};

const Private = ({ component: Component }) => {
	const { userState: { isAuthenticated } } = useContext(Context);
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