import React from 'react'
import {Route, Switch} from 'react-router-dom'

import { PrivateRoute } from '../containers';

import LoginRoute from './LoginRoute'
import AuthorizeRoute from './AuthorizeRoute'
import DashboardRoute from './DashboardRoute'

export default  function Routes() {
    return(
        <Switch>
            <Route path='/' exact component ={LoginRoute}/>
            <Route path='/authorize' exact component ={AuthorizeRoute}/>
            <PrivateRoute path='/dashboard'  comp={DashboardRoute}/>
        </Switch>
    )
}