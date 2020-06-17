import React, { useContext } from 'react';
import { login } from '../../actions/user';
import { Context } from '../../context';
import history from '../../navigation/history';
import { DASHBOARD } from '../../constants/routes';

const Login = props => {
    const { userDispatch } = useContext(Context)
    const signin = () => {
        userDispatch(login({
            isAuthenticated:true
        }))
        history.push(DASHBOARD);
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={signin}>entrar</button>
        </div>
    );
};

export default Login;