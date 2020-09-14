import React from 'react'
import PrivateRoute from './Private/index'

import {
    BrowserRouter as Router,
    Switch,
    Route
   
} from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

import NotFound from './Components/NotFound/NotFound';
import UserProfile from './Components/UserProfile/UserProfile';
import Setting from './Components/Setting/Setting';
import SetPassword from './Components/SignUp/SetPassword';
import Dashboard from './Components/Dashboard/Dashboard';
import Survey from './Components/Survey/Survey';


function Routes() {
    return (
        <Router>
        <Switch>
     
            <Route exact component={Login} path="/" />
                
            <Route  path="/SignUp" component={SignUp} />
                
            {/* <Route path="/Dashboard">
                  <Dashboard />
            </Route> */}
            <PrivateRoute component = {Dashboard} path="/Dashboard"/>
            <PrivateRoute component = {UserProfile} path="/UserProfile"/>
            <PrivateRoute component = {Setting} path="/Setting"/>
            <PrivateRoute component = {Survey} path="/Survey"/>
            <Route component={SetPassword} path="/SetPassword" />
            <Route path="*" component={NotFound} />
        </Switch> 
    </Router>
    )
}

export default Routes
