import React, { useContext } from 'react';
import { Context } from '../../context';
import { logout } from '../../actions/user';
import history from '../../navigation/history';
import { LANDING } from '../../constants/routes';

const Dashboard = props => {
    const { userDispatch } = useContext(Context)
    const out = () => {
        userDispatch(logout())
        history.push(LANDING);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={out}>salir</button>
        </div>
    );
};

export default Dashboard;