import React from 'react';

import './Dashboard.scss';
import Player from '../../containers/Player/Player'

const Dashboard = ({ children }) => (
    <div className="dashboard"  data-testid="dashboard" style={{paddingBottom: '100px'}}>
        {children}

        <Player />
    </div>
);

export default Dashboard;

