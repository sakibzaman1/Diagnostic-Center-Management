import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Dashboard = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
           <h1> {user? user?.email : ''}</h1>
           <h1> {user? user?.displayName : ''}</h1>
        </div>
    );
};

export default Dashboard;