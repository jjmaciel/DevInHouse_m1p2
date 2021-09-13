import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import NoteFound from './pages/Notefound';

function Routes(){
    return (

        <Switch>
            <Route exact path="/" render={() => <Home />} />
            
            <Route path="/dashboard">
                <Dashboard/>
            </Route>

            <Route path="/messages">
                <Messages/>
            </Route>

            <Route path="*">
                <NoteFound/>
            </Route>
        </Switch>
        
    )
};

export default Routes;
