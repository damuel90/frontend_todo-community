import React, { useContext } from 'react';
import { Context } from '../../context';
import { LANDING } from '../../constants/routes';

const Dashboard = props => {
    const { useState } = useContext(Context)

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;