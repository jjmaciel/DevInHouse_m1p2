import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import NoteFound from './pages/Notefound';

function Routes() {


    return (
        <Switch>

            <Route exact path="/" render={() => <Login />} />

            <Route path="/login" render={() => <Login />} />

            <Route path="/dashboard" render={() => <Dashboard />} />

            <Route path="/messages" render={() => <Messages />} />

            <Route path="*" render={() => <NoteFound />} />



        </Switch>

    )
};

export default Routes;

